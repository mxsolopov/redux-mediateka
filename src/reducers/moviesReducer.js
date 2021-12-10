import { ADD_MOVIE, REMOVE_MOVIE, EDIT_MOVIE } from "../actions/actions";

const defaultState = {
    movies: [],
};

export const moviesReducer = (state = defaultState, action) => {
    switch (action.type) {

        case ADD_MOVIE:
            return { ...state, movies: [...state.movies, action.payload] };

        case REMOVE_MOVIE:
            return { ...state, movies: [...state.movies.filter(item => item.id !== action.payload)] };

        case EDIT_MOVIE:
            return {
                ...state,
                movies: state.movies.map(movie => {
                    if (movie.id === action.payload.id) {
                        return { ...movie, [action.payload.prop]: action.payload.value };
                    } else {
                        return movie;
                    }
                })
            };
        default:
            return state;
    }
};