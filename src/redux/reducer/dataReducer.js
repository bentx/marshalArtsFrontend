import { SET_AUTH } from '../action';
import { SET_MobNo } from '../action';
import { SET_User } from '../action';
import { SET_Master } from '../action';

const initMovieState = {
  auth: {},
  mobNo: '',
  data: {},
  masterDetails: [],
};

export default (state = initMovieState, action) => {
  switch (action.type) {
    // case FETCH_ARTILCLES:
    //   return {
    //     ...state,
    //     movieData: action.payload,
    //   };
    // case SEARCH_MOVIE:
    //   return {
    //     ...state,
    //     movieData: action.payload,
    //     searchKey: action.searchkey,
    //   };
    // case FETCH_MOVIE:
    //   return {
    //     ...state,
    //     movieData: action.payload,
    //     genresData: action.genres,
    //     pageNo: action.additin[0],
    //     genres: action.additin[1],
    //     rating: action.additin[2],
    //   };
    // case SET_VIDEO:
    //   return {
    //     ...state,
    //     video: action.payload,
    //   };
    // case SETPAGENO:
    //   return {
    //     ...state,
    //     pageNo: action.payload,
    //   };

    // case SET_SELECTED_GENRES:
    //   return {
    //     ...state,
    //     selectedGenresData: action.payload,
    //   };
    // case SET_GENRES_URL:
    //   return {
    //     ...state,
    //     genres: action.payload,
    //   };

    case SET_AUTH:
      return {
        ...state,
        auth: action.payload,
      };

    case SET_MobNo:
      return {
        ...state,
        mobNo: action.payload,
      };

    case SET_User:
      return {
        ...state,
        data: action.payload,
      };
    case SET_Master:
      return {
        ...state,
        masterDetails: action.payload,
      };

    default:
      return state;
  }
};
