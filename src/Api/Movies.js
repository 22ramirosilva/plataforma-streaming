export const getPopular = () =>
  fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=42b7e116580dc9c6c0683a79ba54b530&language=en-US&page=1`
  ).then((response) => response.json());

export const getTopRated = () =>
  fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=42b7e116580dc9c6c0683a79ba54b530&language=en-US&page=1`
  ).then((response) => response.json());

export const getUpcoming = () =>
  fetch(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=42b7e116580dc9c6c0683a79ba54b530&language=en-US&page=1`
  ).then((response) => response.json());

export const getMovieId = () =>
  fetch(
    `https://api.themoviedb.org/3/movie/{movie_id}?api_key=42b7e116580dc9c6c0683a79ba54b530&language=en-US`
  ).then((response) => response.json());
