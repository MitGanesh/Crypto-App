import './App.css';
import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SearchProvider from './Context/searchProvider';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {
  const [loding, setLoding] = useState(true);

  useEffect(() => {
    // eslint-disable-next-line
    setTimeout(() => {
      setLoding(prev => false);
    }, 2000);
  },[])


  return (
    <SearchProvider>
      <Navbar />
      {loding ?
        <center className="display">
          <motion.img
            initial={{
              opacity: 0.1,
            }}
            animate={{
              opacity: 0.6,
            }}
            transition={{
              duration: 2,
            }}
            src="https://i.giphy.com/media/CsWUjuUu0s8nYbB5pg/200w.webp" alt="loding" />
        </center> :
        <div >
          <Home />
        </div>
      }
    </SearchProvider>
  );
}

export default App;
