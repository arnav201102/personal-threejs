import { Routes, Route } from "react-router-dom";

import Welcome from "./routes/Welcome";
import Memories from "./routes/Memories";
import Letter from "./routes/Letter";
import Finale from "./routes/Finale";
import BackgroundAudio from "./components/BackgroundAudio";
import Patience from "./routes/Patience";

export default function App() {
  return (
    <>
      <BackgroundAudio />

      <Routes>
        <Route path="/" element={<Patience />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/wishes" element={<Finale />} />
      </Routes>
    </>
  );
}
