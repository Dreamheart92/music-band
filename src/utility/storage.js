export const storeToken = (token) => {
    localStorage.setItem('spotify_token', JSON.stringify(token));
    localStorage.setItem('session_start_timestamp', JSON.stringify(new Date().getTime()));
}

export const getTokenFromLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem('spotify_token'));
    return data.access_token;
}

export const getSessionTimestamp = () => {
    const timestamp = JSON.parse(localStorage.getItem('session_start_timestamp'));
    const expires_in = JSON.parse(localStorage.getItem('spotify_token')).expires_in;

    return {
        timestamp,
        expires_in
    }
}

export const checkForSessionExpiration = async (intervalId) => {
    const { timestamp, expires_in } = getSessionTimestamp();

    const expires_in_milliseconds = expires_in * 1000;
    let expiring_in = expires_in_milliseconds + timestamp;

    const time_now = new Date().getTime();

    if (time_now >= expiring_in) {
        localStorage.removeItem('spotify_token');
        localStorage.removeItem('session_start_timestamp');

        clearInterval(intervalId);
        return true;
    }
}