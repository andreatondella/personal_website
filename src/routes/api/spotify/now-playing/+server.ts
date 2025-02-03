import { json } from '@sveltejs/kit';
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

    // Extract relevant information
    const song = {
        title: nowPlayingData.item?.name || 'Unknown',
        artist: nowPlayingData.item?.artists?.map(artist => artist.name).join(', ') || 'Unknown',
        album_cover: nowPlayingData.item?.album?.images[0]?.url || null
    };

    return json(song);
}
