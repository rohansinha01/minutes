/* eslint-disable no-unused-vars */
import React from "react";

const MovieList = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
        <div className="image-container d-flex justify-content-start m-3">
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <img src={movie.Poster} alt="movie"></img>
        </div>
      ))}
    </>
  );
};

export default MovieList;
