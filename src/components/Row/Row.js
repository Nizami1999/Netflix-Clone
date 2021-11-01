import React, { useEffect, useState } from "react";
import YouTube from "react-youtube";
import axios from "../../axios";
import "./Row.scss";
const movieTrailer = require("movie-trailer"); // or import movieTrailer from 'movie-trailer'

const baseURL = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchUrl, largeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    sendGetRequest();
  }, [fetchUrl]);

  // FETCHING DATA WITH async
  const sendGetRequest = async () => {
    try {
      const resp = await axios.get(fetchUrl);
      setMovies(resp.data.results);
    } catch (err) {
      console.error(err);
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    movieTrailer(movie?.name || movie?.title || "")
      .then((url) => {
        const urlParams = new URLSearchParams(new URL(url).search);
        debugger;
        setTrailerUrl(urlParams.get("v"));
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="title">{title}</div>
        <div className="row__wrapper">
          {movies.map((movie) => (
            <div key={movie.id} className="row__poster">
              <img
                onClick={() => handleClick(movie)}
                className={largeRow && "largeRow"}
                src={`${baseURL}${
                  largeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            </div>
          ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default Row;
