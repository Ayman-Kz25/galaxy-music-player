import { useState } from "react"
import MoodModal from "./components/MoodModal"

function App() {

  const [selectedMood, setSelectedMood] = useState(null);

  const handleMoodSelect = (mood) => {
    console.log("Selected Mood: ",mood);
    setSelectedMood(mood);
  }

  return (
    <div className="section">
      {/* <h1 className="section-title">Galaxy Music Player</h1> */}
      <MoodModal onSelectMood={handleMoodSelect}/>

      <div className="absolute inset-0 flex items-center justify-center text-white">
        {
          selectedMood
          ? `Mood chosen: ${selectedMood}`
          : `Waiting for Mood Selection...`
        }
      </div>
    </div>
  )
}

export default App