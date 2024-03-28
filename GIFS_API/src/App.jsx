import React, { useState, useEffect } from 'react';
import Buscador from './Buscador';

const GIPHY_API_KEY = 'TMujM2xnvnTUYOBkDzKS5D3iLqLOG05T'; // Tu clave de API de GIPHY

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    if (searchQuery) {
      handleSearch();
    }
  }, [searchQuery]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${GIPHY_API_KEY}`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch GIFs');
      }
      const data = await response.json();
      setSearchResults(data.data);
      setFilteredResults(data.data);
    } catch (error) {
      console.error('Error searching GIFs:', error);
    }
  };

  return (
    <div>
      <header>
        <h1>GIF Search</h1>
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search for GIFs"
          />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>
      <Buscador results={searchResults} setFilteredResults={setFilteredResults} />
      <div className="gif-container">
        {filteredResults.map((gif) => (
          <div className="gif-item" key={gif.id}>
            <img src={gif.images.original.url} alt={gif.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
