import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';

function MovieList(props) {
  const { movie } = props;
  
  return (
    <div className="movie-list">
      {movie.map(movie => (
        <MovieCard 
          key={movie.id}
          title={movie.title}
          description={movie.description}
          poster={movie.poster}
          rating={movie.rating}
        />
      ))}
    </div>
  );
}

export default MovieList;
