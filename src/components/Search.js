import React, { useState } from "react";

function Search({ movies, setFilteredMovies }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.length >= 2) {
      const filteredMovies = movies.filter((movie) => movie.name.toLowerCase().startsWith(term.toLowerCase()));
      setFilteredMovies(filteredMovies);
    } else {
      setFilteredMovies(movies);
    }
  };

  return (
    <section className="layout-row justify-content-center mb-40">
      <input
        type="text"
        placeholder="Search for movie by name"
        className="w-75 py-2"
        value={searchTerm}
        onChange={handleSearch}
        data-testid="search"
      />
    </section>
  );
}

export default Search;
