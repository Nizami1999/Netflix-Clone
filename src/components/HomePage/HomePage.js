import React from "react";
import Banner from "../Banner/Banner";
import Row from "../Row/Row";
import requests from "../../request";

const HomePage = () => {
  return (
    <>
      <Banner fetchUrl={requests.fetchPopular} />
      <Row title="Popular movies" fetchUrl={requests.fetchPopular} largeRow />
      <Row title="Comedy movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance movies" fetchUrl={requests.fetchRomanMovies} />
      <Row title="Action movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Upcoming movies" fetchUrl={requests.fetchUpcoming} />
    </>
  );
};

export default HomePage;
