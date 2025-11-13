import { useState, useEffect } from 'react'
import './index.css'
import ImageContainer from './components/ImageContainer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Favourites from './components/Favourites';
import About from './components/About';
import Menu from './components/Menu';
import Header from './components/Header';
import type { PexelsPhoto } from './types';

function App() {

  const [images, setImages] = useState<PexelsPhoto[]>([]);
  const [saved, setSaved] = useState<PexelsPhoto[]>([]);
  const [menuOpen, setMenuOpen] = useState(false);

  const PEXELS_API_KEY = import.meta.env.VITE_PEXELS_API_KEY as string;

  const fetchImages = async () => {

    if (!PEXELS_API_KEY) {
      console.error("API key is missing. Please set your Pexels API key.");
      return;
    }

    const res = await fetch(`https://api.pexels.com/v1/search?query=cute+animals&per_page=10&page=${Math.floor(Math.random() * 100)}`,
      {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      }
    );
    if (!res.ok) throw new Error('Failed to fetch images');

    const data = await res.json();
    setImages(data.photos);
  }

  useEffect(() => {
    fetchImages();
  }, []);

  const saveToFav = (image: PexelsPhoto) => {
    if (!saved.find(saveImg => saveImg.id === image.id)) {
      setSaved([...saved, image]);
    }
  }

  return (
    <Router>
      <div className='App'>
        <Header onMenuToggle={() => setMenuOpen(!menuOpen)} />
        {menuOpen && <Menu onClose={() => setMenuOpen(false)} /> }

        <Routes>
          <Route path="/" element={<ImageContainer images={images} onSave={saveToFav} />} />
          <Route path="/favourites" element={<Favourites saved={saved} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;