import React, { useState } from 'react';

const Buscador = ({ results, setFilteredResults }) => {
  const [filter, setFilter] = useState('');

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    filterResults(value);
  };

  const filterResults = (value) => {
    const filtered = results.filter((result) =>
      result.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredResults(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter results"
      />
    </div>
  );
};

export default Buscador;
