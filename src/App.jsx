import { useState, useEffect } from "react";
import MoodModal from "./components/MoodModal";
import GalaxyView from "./components/GalaxyView";
import ThemeSelector from "./components/ThemeSelector";
import Login from "./pages/Login";

const dummySongs = [
  { id: 1, title: "Cosmic Dreams", mood: "calm" },
  { id: 2, title: "Star Voyage", mood: "energetic" },
  { id: 3, title: "Lunar Flow", mood: "calm" },
  { id: 4, title: "Nebula Nights", mood: "emotional" },
  { id: 5, title: "Astro Beats", mood: "party" },
  { id: 6, title: "Meteor Dance", mood: "energetic" },
  { id: 7, title: "Galaxy Pulse", mood: "focus" },
];

const themes = {
  purple: { accent: "#8b5cf6", glow: "#a78bfa" },
  pink: { accent: "#ec4899", glow: "#f472b6" },
  cyan: { accent: "#06b6d4", glow: "#22d3ee" },
};

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [theme, setTheme] = useState("purple");
  const [token, setToken] = useState(null);

  const handleMoodSelect = (mood) => {
    console.log("Selected Mood: ", mood);
    setSelectedMood(mood);
    setCurrentIndex(0);
  };

  const handleSelectSong = (index) => {
    setCurrentIndex(index);
  };

  const filteredSongs = selectedMood
    ? dummySongs.filter((song) => song.mood === selectedMood)
    : dummySongs;

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--accent",
      themes[theme].accent,
    );
    document.documentElement.style.setProperty(
      "--accent-glow",
      themes[theme].glow,
    );
  }, [theme]);

  useEffect(() => {
    const hash = window.location.hash;

    if(hash){
      const token = hash
      .substring(1)
      .split("&")
      .fint((elem) => elem.startsWith("access_token"))
      ?.split("=")[1];

    window.location.hash = "";
    window.localStorage.setItem("spotifyToken", token);
    setToken(token);
    }

    const storedToken = window.localStorage.getItem("spotifyToken");
    if(storedToken){
      setToken(storedToken);
    }
  }, []);

  if(!token){
    return <Login />
  }

  return (
    <div className="section">
      {/* <h1 className="section-title">Galaxy Music Player</h1> */}
      {/* <ThemeSelector currentTheme={theme} setTheme={setTheme} />
      <MoodModal onSelectMood={handleMoodSelect} />
      <GalaxyView
        songs={filteredSongs}
        currentIndex={currentIndex}
        onSelectSong={handleSelectSong}
      />

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        Active Song: {dummySongs[currentIndex].title}
      </div> */}
      <div className="text-white">
        Logged In - Galaxy Loading ...
      </div>
    </div>
  );
}

export default App;
