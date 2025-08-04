import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/app/globals.css";

export default function Home() {
  const audioRef = useRef(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handlePlay = () => {
    if (!hasInteracted && audioRef.current) {
      audioRef.current.volume = 0.2;
      audioRef.current.loop = true;
      audioRef.current.play();
      setHasInteracted(true);
    }
  };

  return (
    <main onClick={handlePlay} className="min-h-screen w-full bg-gradient-to-br from-black via-zinc-900 to-gray-800 text-white font-sans overflow-x-hidden">
      <audio ref={audioRef} src="/Drops on the Horns.wav" preload="auto" />

      <section className="h-screen flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Maadaen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-lg md:text-2xl text-zinc-400 mt-4"
        >
          Frequencies of a Mad Alien
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10"
        >
          <Button className="rounded-2xl px-6 py-3 text-lg shadow-lg bg-white/10 hover:bg-white/20 backdrop-blur border border-white/20">
            Enter the Realm
          </Button>
        </motion.div>
      </section>

      <section data-aos="fade-up" className="py-20 px-6 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">Shapeshifter of Mediums</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Latest Track</h3>
              <iframe
                src="https://open.spotify.com/embed/artist/7vXzyxOzObRw5mpNDy4M7O"
                width="100%"
                height="80"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-xl"
              ></iframe>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Writing</h3>
              <p className="text-sm text-zinc-400">
                Explorations in poetry, memoirs, and philosophical essays.
              </p>
              <a
                href="https://medium.com/@abinbabv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-300 underline mt-2 block"
              >
                Read on Medium
              </a>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border border-white/10 backdrop-blur rounded-2xl p-6">
            <CardContent>
              <h3 className="text-xl font-semibold mb-2">Gallery</h3>
              <p className="text-sm text-zinc-400">
                Visual storytelling with the Fuji X-T30 II.
              </p>
              <a
                href="/gallery"
                className="text-indigo-300 underline mt-2 block"
              >
                Enter Gallery
              </a>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
