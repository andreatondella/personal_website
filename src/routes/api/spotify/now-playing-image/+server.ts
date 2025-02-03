import { json } from '@sveltejs/kit';
import sharp from 'sharp';
import { supabase } from '$lib/supabase';

export async function GET() {
    // Retrieve the access token from the database
    const { data, error } = await supabase
        .from('spotify_tokens')
        .select('access_token')
        .single();

    if (error || !data) {
        console.error('Error fetching access token:', error?.message || 'No data found');
        return json({ error: 'No access token found' }, { status: 404 });
    }

    const access_token = data.access_token;

    // Fetch the currently playing track from Spotify
    const nowPlayingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: { Authorization: `Bearer ${access_token}` }
    });

    if (nowPlayingResponse.status === 204) {
        console.log('No song currently playing (204 No Content)');
        return new Response(null, { status: 204 });
    }

    if (!nowPlayingResponse.ok) {
        const errorBody = await nowPlayingResponse.json();
        console.error('Error fetching now playing:', errorBody);
        return json({ error: 'Failed to fetch now playing' }, { status: nowPlayingResponse.status });
    }

    const nowPlayingData = await nowPlayingResponse.json();

    const song = {
        title: nowPlayingData.item?.name || 'Unknown Song',
        artist: nowPlayingData.item?.artists?.map(artist => artist.name).join(', ') || 'Unknown Artist',
        album_cover: nowPlayingData.item?.album?.images[0]?.url || null
    };

    if (!song.album_cover) {
        return json({ error: 'No album cover available' }, { status: 400 });
    }

    try {
        const response = await fetch(song.album_cover);
        if (!response.ok) {
            throw new Error('Failed to fetch album cover');
        }
        const albumCoverBuffer = await response.arrayBuffer();

        // Canvas dimensions
        const CANVAS_WIDTH = 448;
        const CANVAS_HEIGHT = 600;
        const TEXT_AREA_HEIGHT = 60; // Space for text at the bottom
        const ALBUM_HEIGHT = CANVAS_HEIGHT - TEXT_AREA_HEIGHT - 40; // Adjust for label
        const ALBUM_WIDTH = Math.min(ALBUM_HEIGHT, CANVAS_WIDTH); // Ensure album art stays within the frame

        // Calculate vertical center for album art and position label at top
        const albumTopOffset = Math.floor((CANVAS_HEIGHT - ALBUM_HEIGHT - TEXT_AREA_HEIGHT - 10) / 2) + 40; // Top offset for image

        // Calculate horizontal center for album art
        const albumLeftOffset = Math.floor((CANVAS_WIDTH - ALBUM_WIDTH) / 2);

        // Resize the album cover to fit within the square (448px x 448px max)
        const resizedAlbumCover = sharp(Buffer.from(albumCoverBuffer))
            .resize(ALBUM_WIDTH, ALBUM_WIDTH, { fit: 'contain', withoutEnlargement: true });

        // Log resized dimensions
        const metadata = await resizedAlbumCover.metadata();
        console.log('Resized album cover dimensions:', metadata.width, metadata.height);

        // Create the final image with the black background
        const albumCoverBufferResized = await resizedAlbumCover.toBuffer();

        const imageBuffer = await sharp({
            create: {
                width: CANVAS_WIDTH,
                height: CANVAS_HEIGHT,
                channels: 4,
                background: { r: 0, g: 0, b: 0, alpha: 1 } // Black background
            }
        })
        .composite([
            {
                // Place "Now playing:" label on top
                input: Buffer.from(`<svg width="${CANVAS_WIDTH}" height="40">
                    <text 
                        x="10" 
                        y="35" 
                        font-family="Helvetica" 
                        font-weight="bold"
                        font-size="24" 
                        fill="white" 
                        text-anchor="start"
                    >Now playing:</text>
                </svg>`),
                top: 0,
                left: 0
            },
            {
                // Place album cover in the center
                input: albumCoverBufferResized,
                top: albumTopOffset,
                left: albumLeftOffset
            },
            {
                // Text overlay at the bottom, left-aligned
                input: Buffer.from(`<svg width="${CANVAS_WIDTH}" height="${CANVAS_HEIGHT}">
                    <rect width="100%" height="${TEXT_AREA_HEIGHT}" y="${CANVAS_HEIGHT - TEXT_AREA_HEIGHT}" fill="black"/>
                    <text 
                        x="10" 
                        y="${CANVAS_HEIGHT - TEXT_AREA_HEIGHT + 10}" 
                        font-family="Helvetica" 
                        font-weight="bold"
                        font-size="32" 
                        fill="white" 
                        text-anchor="start"
                    >${song.title}</text>
                    <text 
                        x="10" 
                        y="${CANVAS_HEIGHT - 20}" 
                        font-family="Helvetica"
                        font-weight="bold"
                        font-size="24" 
                        fill="white" 
                        text-anchor="start"
                    >${song.artist}</text>
                </svg>`),
                top: 0,
                left: 0
            }
        ])
        .png()
        .toBuffer();

        return new Response(imageBuffer, {
            headers: { 
                'Content-Type': 'image/png',
                'Cache-Control': 'no-cache' 
            }
        });

    } catch (error) {
        console.error('Error generating image:', error);
        return new Response('Error generating image', { status: 500 });
    }
}
