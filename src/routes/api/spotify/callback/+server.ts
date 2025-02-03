import { json } from '@sveltejs/kit';
import { supabase } from '$lib/supabase';
import { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET, SPOTIFY_REDIRECT_URI } from '$env/static/private';

export async function GET({ url }) {
    const code = url.searchParams.get('code');

    if (!code) {
        return json({ error: 'Authorization code missing' }, { status: 400 });
    }

    const tokenResponse = await fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Basic ${btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)}`
        },
        body: new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            redirect_uri: SPOTIFY_REDIRECT_URI
        })
    }).then(res => res.json());

    if (tokenResponse.error) {
        return json({ error: tokenResponse.error }, { status: 400 });
    }

    const { access_token, refresh_token } = tokenResponse;

    // Fetch user info from Spotify to get user_id
    const userResponse = await fetch('https://api.spotify.com/v1/me', {
        headers: {
            Authorization: `Bearer ${access_token}`
        }
    });

    const userData = await userResponse.json();

    if (userData.error) {
        return json({ error: userData.error }, { status: 400 });
    }

    const user_id = userData.id;  // Get the user ID from Spotify API

    // Log the received refresh token and user ID
    console.log('Received refresh token:', refresh_token);
    console.log('User ID:', user_id);

    // Check if the user already exists in the database
    const { data, error: selectError } = await supabase
        .from('spotify_tokens')
        .select('*')
        .eq('user_id', user_id)  // Use the actual user ID
        .single();  // Only expecting one record

    if (selectError && selectError.code !== 'PGRST116') {
        // If error is not "PGRST116", something else went wrong
        console.error('Error checking user:', selectError.message);
        return json({ error: selectError.message }, { status: 500 });
    }

    if (!data) {
        // User doesn't exist, insert the new user with refresh token
        const { error: insertError } = await supabase
            .from('spotify_tokens')
            .insert([{ user_id, access_token, refresh_token }]);

        if (insertError) {
            console.error('Error inserting new user:', insertError.message);
            return json({ error: insertError.message }, { status: 500 });
        }

        return json({ success: true, message: 'Spotify authentication complete, user created' });
    } else {
        // User exists, update their refresh token
        const { error: updateError } = await supabase
            .from('spotify_tokens')
            .update({ access_token, refresh_token })
            .eq('user_id', user_id);  // Use the actual user ID

        if (updateError) {
            console.error('Error updating user tokens:', updateError.message);
            return json({ error: updateError.message }, { status: 500 });
        }

        return json({ success: true, message: 'Spotify authentication complete, tokens updated' });
    }
}
