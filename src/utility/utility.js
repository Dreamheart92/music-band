export const checkIfTokenExist = () => {
    const token = localStorage.getItem('spotify_token');

    return !!token;
}