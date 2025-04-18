/* eslint-disable no-unused-vars */
import React from "react";
import FavMovies from "./FavMovies";

const MovieList = (props) => {
  const FavComponent = props.favComponent
  return (
    <>
      {props.movies.map((movie) => (
        // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
        <div className="image-container d-flex justify-content-start m-3">
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <img src={movie.Poster} alt="movie"></img>
          <div className="overlay d-flex align-items-center justify-content-center">
            <FavComponent />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
