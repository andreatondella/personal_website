import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } from '$env/static/private';

export async function GET() {
    // Retrieve the stored refresh_token and user_id from the database
    const { data, error } = await supabase
        .from('spotify_tokens')
        .select('user_id, refresh_token')  // Fetch both user_id and refresh_token
        .single();  // We expect only one user for now

    if (error || !data) {
        console.error('Error fetching refresh token:', error?.message || 'No data found');
        return json({ error: 'No refresh token found' }, { status: 404 });
    }

    const { user_id, refresh_token } = data;

    console.log('Refreshing token for user:', user_id);

    // Make a request to get a new access token using the refresh token
    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)}`
        },
        body: new URLSearchParams({
            grant_type: 'refresh_token',
            refresh_token
        })
    }).then(res => res.json());

    if (tokenResponse.error) {
        console.error('Error refreshing token:', tokenResponse.error);
        return json({ error: tokenResponse.error }, { status: 400 });
    }

    const { access_token } = tokenResponse;

    console.log('New access token received:', access_token);

    // Store the new access token in the database
    const { error: updateError } = await supabase
        .from('spotify_tokens')
        .update({ access_token })
        .eq('user_id', user_id);  // Update for the correct user

    if (updateError) {
        console.error('Error updating access token:', updateError.message);
        return json({ error: updateError.message }, { status: 500 });
    }

    return json({ success: true, access_token });
}
