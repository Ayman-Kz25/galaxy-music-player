import { useState } from "react";
import MoodModal from "./components/MoodModal";
import GalaxyView from "./components/GalaxyView";

const dummySongs = [
  { id: 1, title: "Cosmic Dreams" },
  { id: 2, title: "Star Voyage" },
  { id: 3, title: "Lunar Flow" },
  { id: 4, title: "Nebula Nights" },
  { id: 5, title: "Astro Beats" },
  { id: 6, title: "Meteor Dance" },
  { id: 7, title: "Galaxy Pulse" },
];

function App() {
  const [selectedMood, setSelectedMood] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMoodSelect = (mood) => {
    console.log("Selected Mood: ", mood);
    setSelectedMood(mood);
  };

  return (
    <div className="section">
      {/* <h1 className="section-title">Galaxy Music Player</h1> */}
      <MoodModal onSelectMood={handleMoodSelect} />
      <GalaxyView songs={dummySongs} currentIndex={currentIndex} />

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
        Active Song: {dummySongs[currentIndex].title}
      </div>
    </div>
  );
}

export default App;
