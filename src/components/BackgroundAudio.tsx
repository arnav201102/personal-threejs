import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const routeAudioMap: Record<string, string | null> = {
  "/welcome": "/audio/Ordinary.mp3",
  "/memories": "/audio/Falling.mp3",
  "/letter": "/audio/Karoon.mp3",
  "/wishes": "/audio/Teenage.mp3",
};

export default function BackgroundAudio() {
  const location = useLocation();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const src = routeAudioMap[location.pathname];
    if (!src) return;

    // Prevent re-creating same audio
    if (audioRef.current?.src.includes(src)) return;

    // Cleanup old audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    const audio = new Audio(src);
    audio.loop = true;
    audio.volume = 0.6;
    audio.muted = true; // 🔑 KEY LINE

    audio
      .play()
      .then(() => {
        // Unmute shortly after autoplay starts
        setTimeout(() => {
          audio.muted = false;
        }, 300);
      })
      .catch(() => {
        // Will still fail on very strict browsers (iOS Safari)
      });

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, [location.pathname]);

  return null;
}
