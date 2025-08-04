import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const photos = [
  {
    title: 'Silhouettes of Velliangiri',
    url: '/gallery/velliangiri-silhouette.jpg',
    category: 'Nature',
  },
  {
    title: 'Market Monsoon, Kerala',
    url: '/gallery/kerala-market.jpg',
    category: 'Street',
  },
  {
    title: 'Temple Shadows',
    url: '/gallery/temple-shadows.jpg',
    category: 'Architecture',
  },
];

const categories = ['All', 'Nature', 'Street', 'Architecture'];

export default function Gallery() {
  const [filter, setFilter] = useState('All');

  const filteredPhotos =
    filter === 'All' ? photos : photos.filter((p) => p.category === filter);

  return (
    <div className="px-6 py-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Fujifilm Gallery</h2>
      <div className="flex justify-center mb-6 gap-3 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
              filter === cat ? 'bg-black text-white' : 'border-black text-black'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPhotos.map((photo, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <Card className="overflow-hidden">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-4">
                <h3 className="text-lg font-semibold">{photo.title}</h3>
                <p className="text-sm text-gray-600">{photo.category}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
