import React, { useState, useEffect } from "react";
import axios from "../../axios";
import "./Banner.scss";

const Banner = ({ fetchUrl }) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const sendGetRequest = async () => {
      try {
        const resp = await axios.get(fetchUrl);
        setMovie(
          resp.data.results[
            Math.floor(Math.random() * resp.data.results.length - 1)
          ]
        );
      } catch (err) {
        console.error(err);
      }
    };

    sendGetRequest();
  }, [fetchUrl]);

  return (
    <header
      style={{
        backgroundImage: `linear-gradient(transparent 1%, #111 99%), url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
      }}
      className="banner"
    >
      <div className="banner-content">
        <div className="title">{movie?.name || movie?.title}</div>
        <div className="banner-btn-wrapper">
          <div className="banner-btn">Play</div>
          <div className="banner-btn">My List</div>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          asperiores quo nam maxime ipsam quasi consectetur officia temporibus,
          obcaecati fugiat distinctio eum voluptatum omnis, accusamus itaque
          unde incidunt voluptates nesciunt?
        </p>
      </div>
    </header>
  );
};

export default Banner;
