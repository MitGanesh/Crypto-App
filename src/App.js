import './App.css';
import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SearchProvider from './Context/searchProvider';
import Landing from './components/Landing';
import Benefits from './components/WhyUs';

function App() {
  return (
    <SearchProvider>
      <Navbar />
      <Landing />
      <Home />
      <Benefits />
    </SearchProvider>
  );
}

export default App;
