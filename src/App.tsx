import { Routes, Route } from "react-router-dom";
import Welcome from "./routes/Welcome";
import Memories from "./routes/Memories";
import Letter from "./routes/Letter";
import Finale from "./routes/Finale";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/memories" element={<Memories />} />
      <Route path="/letter" element={<Letter />} />
      <Route path="/wishes" element={<Finale />} />
    </Routes>
  );
}
