// src/pages/Music.tsx

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const releases = [
  {
    title: "AlienNation EP",
    description:
      "A cosmic journey into ambient solitude, fusing spacey textures with pulsing IDM rhythms.",
    embedUrl: "https://open.spotify.com/embed/album/0QeYEysh9IGFSmLkM6zTtv",
  },
  {
    title: "Shapeshifting (Single)",
    description:
      "Explores themes of transformation and identity through psychedelic soundscapes.",
    embedUrl: "https://open.spotify.com/embed/track/1Npdc6DFp5Dz5U5ZQJvOv6",
  },
];

export default function Music() {
  return (
    <main className="px-6 py-10 max-w-4xl mx-auto">
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Music by Maadaen
      </motion.h1>

      <div className="space-y-10">
        {releases.map((release, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-4">
                <h2 className="text-2xl font-semibold mb-2">{release.title}</h2>
                <p className="mb-4 text-gray-600">{release.description}</p>
                <iframe
                  src={release.embedUrl}
                  width="100%"
                  height="80"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
