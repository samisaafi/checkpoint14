import React from "react";
import "./MovieCard.css";

const MovieCard = ({title, description, imageUrl, date}) => {
  return (
    <div>
      // Inside the MovieList component's return statement
<MovieCard key={index}>
  <a href={`/description/${index}`} target="_blank">
  </a>
</MovieCard>

      <div className="card">
        <a href="#">
          <img className="img1" src={imageUrl}></img>
          <img className="img2" src={imageUrl}></img>
          <div className="title">{title}</div>
          <div className="text">{description}</div>
          <a href="#">
            <div className="catagory">
              Series <i className="fas fa-film"></i>
            </div>
          </a>
          <a href="#">
            <div className="views">
              {date} <i className="far fa-eye"></i>{" "}
            </div>
          </a>
        </a>
      </div>
    </div>
  );
};

export default MovieCard;