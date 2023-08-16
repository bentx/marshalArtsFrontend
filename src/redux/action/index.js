import axios from 'axios';
export const FETCH_ARTILCLES = 'fetch_articles';
export const SETROUTEVALUE = 'SETROUTEVALUE';
export const SETPAGENO = 'SETPAGENO';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const SET_SELECTED_GENRES = 'SET_SELECTED_GENRES';
export const SET_GENRES = 'SET_GENRES';
export const SET_User = 'SET_User';
export const SET_MobNo = 'SET_MobNo';
export const SET_AUTH = 'SET_AUTH';
export const SET_Master = 'SET_Master';

// export const fetchMovieData = (params) => async (dispath) => {
//   if (params.length === 1) {
//     const url = `https://api.themoviedb.org/3/trending/week/day?api_key=92e2d369d2678331be36143172cb7a86&page=${params[0]}`;
//     const { data } = await axios.get(url);
//     dispath({
//       type: SETROUTEVALUE,
//       payload: 0,
//     });
//     dispath({
//       type: FETCH_ARTILCLES,
//       payload: data,
//     });
//   } else if (params.length === 2) {
//     const url = `https://api.themoviedb.org/3/search/movie?api_key=92e2d369d2678331be36143172cb7a86&language=en-US&query=${params[1]}&page=${params[0]}&include_adult=false`;
//     const { data } = await axios.get(url);
//     dispath({
//       type: SETROUTEVALUE,
//       payload: 2,
//     });
//     dispath({
//       type: SEARCH_MOVIE,
//       payload: data,
//       searchkey: params[1],
//     });
//   } else {
//     dispath({
//       type: SETROUTEVALUE,
//       payload: 1,
//     });

//     const url = `https://api.themoviedb.org/3/discover/movie?api_key=92e2d369d2678331be36143172cb7a86&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${params[0]}&with_genres=${params[1]}&vote_average.gte=${params[2]}`;
//     const { data } = await axios.get(url);

//     const genresurl = `https://api.themoviedb.org/3/genre/movie/list?api_key=92e2d369d2678331be36143172cb7a86&language=en-US`;
//     const genresdata = await axios.get(genresurl);
//     dispath({
//       type: FETCH_MOVIE,
//       payload: data,
//       genres: genresdata.data.genres,
//       additin: params,
//     });
//   }
// };

// export const fetchVideo = (movie) => async (dispath) => {
//   const url = `https://api.themoviedb.org/3/${movie.media_type}/${movie.id}/videos?api_key=92e2d369d2678331be36143172cb7a86&language=en-US`;
//   const { data } = await axios.get(url);
//   console.log('data:', data);
//   dispath({
//     type: SET_VIDEO,
//     payload: data,
//   });
// };
// export const setRouteValue = (data) => {
//   return {
//     type: SETROUTEVALUE,
//     payload: data,
//   };
// };
// export const setSelectedGenresData = (data) => {
//   return {
//     type: SET_SELECTED_GENRES,
//     payload: data,
//   };
// };
// export const setGenresData = (data) => {
//   return {
//     type: SET_GENRES,
//     payload: data,
//   };
// };
// setGenres;
// export const setGenres = (data) => {
//   return {
//     type: SET_GENRES_URL,
//     payload: data,
//   };
// };
export const setAuthToken = (data) => {
  return {
    type: SET_AUTH,
    payload: data,
  };
};

export const setMobNo = (data) => {
  return {
    type: SET_MobNo,
    payload: data,
  };
};
export const setUser = (data) => {
  return {
    type: SET_User,
    payload: data,
  };
};

export const setMaster = (data) => {
  return {
    type: SET_Master,
    payload: data,
  };
};
