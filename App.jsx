// This is the entry point for the React-based Maadaen Portfolio site
// The full codebase includes:
// - Dynamic routing for pages: Home, Music, Medium, Blog, Gallery, Contact
// - Ambient audio control
// - Live Medium article fetch
// - Spotify API integration (previews and descriptions)
// - AOS (Animate On Scroll)
// - CMS-based blog (e.g., markdown or headless CMS ready)
// - Gallery of FujiFilm photojournalism samples
// - Custom transitions, filters, and minimalistic UI

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Music } from './pages/Music';
import { MediumFeed } from './pages/MediumFeed';
import { Blog } from './pages/Blog';
import { Gallery } from './pages/Gallery';
import { Contact } from './pages/Contact';
import { AmbientAudio } from './components/AmbientAudio';
import { ScrollToTop } from './components/ScrollToTop';
import './styles/global.css';
import 'aos/dist/aos.css';
import AOS from 'aos';

function App() {
  React.useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <AmbientAudio src="/audio/Drops-on-the-Horns.mp3" loop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/medium" element={<MediumFeed />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
