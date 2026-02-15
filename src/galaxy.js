const authEndPoint = "https://accounts.spotify.com/authorize?";
const clientID = "d888c7c22ba643e4a0db11e1e95e9616";
const redirectUrl = "http://localhost:5173"; // Vite default
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndPoint = `${authEndPoint}client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;