import React from "react";
// import { Link } from "react-router-dom";
import "./CardPoster.css";

const CardPoster = ({ movie }) => {
  return (
    <div className="card">
      <img
        className="poster_img"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.original_title}
      />

      <div className="text-above">{movie.title}</div>
    </div>
  );
};

export default CardPoster;
