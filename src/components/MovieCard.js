import React from "react";

function MovieCard({ movie }) {
  const { title, description, poster, rating } = movie;

  return (
    <div className="movie-card">
        <h2>{movie.title}</h2>
      <img className="movie-poster" src={poster} alt={title} />
      <div className="movie-details">
        <h2 className="movie-title">{title}</h2>
        <p className="movie-description">{description}</p>
        <div className="movie-rating">
          <span className="rating">{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
