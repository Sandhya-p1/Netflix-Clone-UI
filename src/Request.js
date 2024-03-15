const API_KEY = "51e6e3e5e370a8dbf0b455deb74ac540";
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
  fetchNEtflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMoview: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_geners=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_geners=27`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_geners=99`,
};
export default requests;
