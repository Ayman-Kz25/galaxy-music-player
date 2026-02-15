import React from "react";

function GalaxyView({ songs, currentIndex }) {
  const galaxyRadius = 200;
  const centerX = 0;
  const centerY = 0;

  return (
    <div className="box">
      <div className="relative w-[500] h-[500]">
        {songs.map((song, index) => {
          const angle = (index / songs.length) * 2 * Math.PI;
          const radius = galaxyRadius;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          const isActive = currentIndex === index;

          return (
            <div
              key={song.id}
              className={`absolute w-16 h-16 rounded-full bg-purple-500 shadow-[0_0_20px_#a78bfa] flex items-center justify-center text-white cursor-pointer ${isActive ? "animate-spin-slow scale-110" : ""}
            transform transition-all duration-500`}
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              {song.title[0]}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GalaxyView;
