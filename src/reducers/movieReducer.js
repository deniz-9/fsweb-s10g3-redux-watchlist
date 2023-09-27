

import { movies } from "../movies";
import { NEXT_MOVIE, PREV_MOVIE, ADD_FAVORITE, REMOVE_FAVORITE, FIRST_MOVIE } from "../actions/actions";

const initialState = {
  movies: movies,
  sira: 0,
  favMovies: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_MOVIE:
      return { ...state, sira: state.sira + 1 };
    case FIRST_MOVIE:
      return { ...state, sira: 0 }; 
    case PREV_MOVIE:
      return { ...state, sira: state.sira - 1 };
    case ADD_FAVORITE:
      let yeniSira = state.sira === state.movies.length - 1 ? state.sira - 1 : state.sira;
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload], 
        movies: state.movies.filter((movie) => movie.id !== action.payload.id), 
        sira: yeniSira,
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favMovies: [...state.favMovies.filter((movie) => movie.id !== action.payload)],
      };
    default:
      return state;
  }
};

export default reducer;
