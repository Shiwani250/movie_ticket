import React from "react";
import { useEffect, useState } from "react";
import moviesdata from "../../Resources/movie_details.json";
import Moviecard from "./movieCard";

function Moviedetails(props) {
  const id = +props.match.params.id;
  const [movieDetail, setMovieDetail] = useState(0);
  useEffect(() => {
    const movieDetailData = moviesdata.movies.find((movie) => movie.id === id);
    setMovieDetail(movieDetailData);
    return () => {};
  }, []);
  return (
    <>
      <Moviecard
        key={movieDetail.id}
        movieId={movieDetail.id}
        imgsrc={movieDetail.image}
        title={movieDetail.title}
        plot={movieDetail.plot}
        genre={movieDetail.genre}
        director={movieDetail.director}
        stars={movieDetail.stars}
        prices={movieDetail.prices}
        currency={movieDetail.currency}
      />
    </>
  );
}

export default Moviedetails;
