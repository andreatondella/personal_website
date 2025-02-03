import sharp from 'sharp';

export async function generateNowPlayingImage(song) {
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

    return imageBuffer;
}
