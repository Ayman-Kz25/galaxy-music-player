import { useState } from "react";

const moods = [
  { name: "Calm 🌸", value: "calm" },
  { name: "Energetic⚡", value: "energetic" },
  { name: "Focus ✨", value: "focus" },
  { name: "Emotional 🥹", value: "emotional" },
  { name: "Party 🎉", value: "party" },
];

function MoodModal({ onSelectMood }) {
  //set modal visibility
  const [visible, setVisible] = useState(true);

  const handleSelect = (mood) => {
    setVisible(false);
    onSelectMood(mood);
  };

  const handleSkip = () => {
    setVisible(false);
    onSelectMood(null); //here null indicates random songs
  };

  if (!visible) return null;

  return (
    <div className="container">
      <h2 className="title">Select Your Mood</h2>
      <div className="mood-modal">
        {moods.map((mood) => (
          <button
            key={mood.value}
            onClick={() => handleSelect(mood.value)}
            className="mood-btn"
          >
            {mood.name}
          </button>
        ))}
      </div>
      <button onClick={handleSkip} className="skip-btn">
        Skip
      </button>
    </div>
  );
}

export default MoodModal;
