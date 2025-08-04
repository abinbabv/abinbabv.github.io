// components/AmbientAudio.tsx
import { useEffect, useRef, useState } from "react";

export default function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    if (!started && audioRef.current) {
      audioRef.current.volume = 0.3;
      audioRef.current.loop = true;
      audioRef.current.play().catch((err) => console.log(err));
      setStarted(true);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", handleStart, { once: true });
    return () => document.body.removeEventListener("click", handleStart);
  }, []);

  return (
    <audio ref={audioRef} src="/audio/DropsOnTheHorns.wav" preload="auto" />
  );
}
