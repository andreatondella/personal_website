import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';
import { generateNowPlayingImage } from '$lib/generateImage';

export async function GET() {
    // Retrieve the access token from the database
    const { data: tokenData, error: tokenError } = await supabase
        .from('spotify_tokens')
        .select('access_token')
        .single();

    if (tokenError || !tokenData) {
        console.error('Error fetching access token:', tokenError?.message || 'No data found');
        return json({ error: 'No access token found' }, { status: 404 });
    }

    const access_token = tokenData.access_token;

    // Fetch the currently playing track from Spotify
    const nowPlayingResponse = await fetch('https://api.spotify.com/v1/me/player/currently-playing', {
        headers: { Authorization: `Bearer ${access_token}` }
    });

    if (nowPlayingResponse.status === 204) {
        console.log('No song currently playing (204 No Content)');
        // Set the next check interval to 5 minutes
        await supabase
            .from('spotify_check_interval')
            .upsert({ id: 1, interval: 300000 }); // 5 minutes in milliseconds
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

    // Retrieve the previously stored song
    const { data: previousSongData, error: previousSongError } = await supabase
        .from('spotify_now_playing')
        .select('*')
        .single();

    if (previousSongError && previousSongError.code !== 'PGRST116') {
        console.error('Error fetching previous song:', previousSongError.message);
        return json({ error: previousSongError.message }, { status: 500 });
    }

    // Check if the song has changed
    if (!previousSongData || previousSongData.title !== song.title || previousSongData.artist !== song.artist) {
        // Update the stored song
        const { error: updateError } = await supabase
            .from('spotify_now_playing')
            .upsert({ id: 1, ...song });

        if (updateError) {
            console.error('Error updating song:', updateError.message);
            return json({ error: updateError.message }, { status: 500 });
        }

        // Generate a new image
        const imageBuffer = await generateNowPlayingImage(song);

        // Store the image buffer in a storage service or return it directly
        // For simplicity, we'll return it directly here
        return new Response(imageBuffer, {
            headers: { 
                'Content-Type': 'image/png',
                'Cache-Control': 'no-cache' 
            }
        });
    }

    // Set the next check interval to 10 seconds if a song is currently playing
    await supabase
        .from('spotify_check_interval')
        .upsert({ id: 1, interval: 10000 }); // 10 seconds in milliseconds

    return json({ message: 'No change in song' });
}
