import React from "react";
// import { Link } from "react-router-dom";
// import "./CardBackdrop.css";

const CardBackdrop = ({ movie }) => {
  return (
    <div className="card">
      <img
        className="poster_img"
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.original_title}
      />

      <div className="text-above">{movie.title}</div>

      {/* <div>{movie.title}</div>
      <div>{movie.vote_average * 10 + " % para ti"}</div>
      <div>{movie.release_date.slice(0, 4)}</div>

      {movie.adult === true ? <div>+18</div> : <div></div>} */}
    </div>
  );
};

export default CardBackdrop;
