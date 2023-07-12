import React, { useState } from "react";
import "./App.css";
import "h8k-components";

import { Movieform, Movieslist, Search } from "./components";

const title = "Favorite Movie Directory";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const addMovie = (movie) => {
    setMovies([...movies, movie].sort((a, b) => a.duration > b.duration));
    setFilteredMovies((prevMovies) => [...prevMovies, movie].sort((a, b) => (a.duration < b.duration ? 1 : -1)));
  };

  return (
    <div>
      <h8k-navbar header={title} />
      <div className="layout-row justify-content-center mt-100">
        <div className="w-30 mr-75">
          <Movieform addMovie={addMovie} />
        </div>
        <div className="layout-column w-30">
          <Search movies={movies} setFilteredMovies={setFilteredMovies} />
          {movies.length !== 0 && <Movieslist movies={filteredMovies} />}
          {movies.length !== 0 && filteredMovies.length === 0 && (
            <div data-testid="noResult">
              <h3 className="text-center">No Results Found</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
