const API_KEY = "70553f93290957f478c6ba0f057d19ef";

const requests = {
  fetchPopular: `/movie/popular?api_key=${API_KEY}`,
  fetchHorrorMovies: `discover/movie/?api_key=${API_KEY}&with_genres=27`,
  fetchActionMovies: `discover/movie/?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie/?api_key=${API_KEY}&with_genres=35`,
  fetchRomanMovies: `discover/movie/?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `discover/movie/?api_key=${API_KEY}&with_genres=99`,
  fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}`,
};

export default requests;
