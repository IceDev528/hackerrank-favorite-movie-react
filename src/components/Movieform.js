import React, { useState } from "react";

function Movieform({ addMovie }) {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");
  const hoursRegex = /^(\d+(\.\d+)?)h$/;
  const minutesRegex = /^(\d+)m$/;

  const handleNameChange = (e) => {
    setName(e.target.value);
    setError("");
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    setError("");
  };

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !rating || !duration) {
      setError("Please fill in all fields");
      return;
    }

    console.log(name);

    const movie = {
      name,
      rating: parseInt(rating),
      duration: convertDuration(duration),
    };

    if (!hoursRegex.test(duration) && !minutesRegex.test(duration)) {
      setError("Please specify time in hours or minutes (e.g. 2.5h or 150m)");
      return;
    }

    addMovie(movie);

    setName("");
    setRating("");
    setDuration("");
  };

  const convertDuration = (duration) => {
    if (hoursRegex.test(duration)) {
      const hours = parseFloat(duration);
      return `${hours} Hrs`;
    } else if (minutesRegex.test(duration)) {
      const minutes = parseInt(duration.slice(0, duration.length - 1));
      const hours = (minutes / 60).toFixed(1);
      return `${hours} Hrs`;
    }
  };

  return (
    <section>
      <div className="card pa-30">
        <form onSubmit={handleSubmit}>
          <div className="layout-column mb-15">
            <label htmlFor="name" className="mb-3">
              Movie Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Movie Name"
              value={name}
              onChange={handleNameChange}
              data-testid="nameInput"
            />
          </div>
          <div className="layout-column mb-15">
            <label htmlFor="ratings" className="mb-3">
              Ratings
            </label>
            <input
              type="number"
              id="ratings"
              placeholder="Enter Rating on a scale of 1 to 100"
              value={rating}
              onChange={handleRatingChange}
              data-testid="ratingsInput"
            />
          </div>
          <div className="layout-column mb-30">
            <label htmlFor="duration" className="mb-3">
              Duration
            </label>
            <input
              type="text"
              id="duration"
              placeholder="Enter duration in hours or minutes"
              value={duration}
              onChange={handleDurationChange}
              data-testid="durationInput"
            />
          </div>
          {error && (
            <div className="alert error mb-30" data-testid="alert">
              {error}
            </div>
          )}
          <div className="layout-row justify-content-end">
            <button type="submit" className="mx-0" data-testid="addButton">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Movieform;
