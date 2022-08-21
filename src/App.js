import './App.css';
import React from 'react';
import Home from './components/Home';
import Navbar from './components/Navbar';
import SearchProvider from './Context/searchProvider';

function App() {
  // const [mode, setMode] = useState(false);

  return (
    <SearchProvider>
      <div >
        <Navbar />
        <Home />
      </div>
    </SearchProvider>
  );
}

export default App;
