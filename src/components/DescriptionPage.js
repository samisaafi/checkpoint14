import React, { useState, useEffect } from "react";

const DescriptionPage = ({ match, Movies }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    
    const movieIndex = match.params.index;
    const selectedMovie = Movies[movieIndex];

    setMovie(selectedMovie);
  }, [match.params.index, Movies]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <iframe
        width="560"
        height="315"
        src={movie.trailerLink}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default DescriptionPage;
