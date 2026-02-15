import React from "react";
import { loginEndPoint } from "../galaxy";

function Login() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-black to-blue-900">
      
      <div className="bg-black/40 backdrop-blur-md p-10 rounded-2xl shadow-2xl text-center text-white">
        
        <h1 className="text-3xl font-bold mb-4">
          Galaxy Music Player
        </h1>

        <p className="text-gray-300 mb-8">
          Enter your universe of mood-based music
        </p>

        <a
          href={loginEndPoint}
          className="px-6 py-3 rounded-full bg-green-500 hover:bg-green-600 transition-all text-black font-semibold shadow-lg transform hover:scale-105"
        >
          Login with Spotify
        </a>

      </div>
    </div>
  );
}

export default Login;