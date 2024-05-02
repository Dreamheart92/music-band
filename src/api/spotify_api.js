import {client_id, client_secret} from "../data/spotify.js";
import {spotify_endpoints} from "./spotify_endpoints.js";

import {getTokenFromLocalStorage} from "../utility/storage.js";

export const getToken = async () => {
    const body = new URLSearchParams();

    body.append('grant_type', 'client_credentials');
    body.append('client_id', client_id);
    body.append('client_secret', client_secret);

    const options = {
        method: 'Post',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body
    }

    try {
        const response = await fetch(spotify_endpoints.token, options);
        return await response.json();

    } catch (err) {
        console.log(err);
    }
}

export const getSpotifyAlbum = async (id) => {
    const token = getTokenFromLocalStorage();
    const options = {
        method: 'Get',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    }

    const url = spotify_endpoints.album_tracks.replace('{id}', id);

    try {
        const response = await fetch(url, options);
        return await response.json();
    } catch (err) {
        console.log(err);
    }
}

export const getTrack = async (id) => {
    const token = getTokenFromLocalStorage();
    const options = {
        method: 'Get',
        headers: {
            'Authorization': `Bearer ${token}`,
        }
    }

    const url = spotify_endpoints.track.replace('{id}', id);

    try {
        const response = await fetch(url, options);
        return response.json();
    } catch (err) {
        console.log(err);
    }
}