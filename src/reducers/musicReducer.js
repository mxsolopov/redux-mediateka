import { ADD_MUSIC, REMOVE_MUSIC, EDIT_MUSIC } from "../actions/actions";

const defaultState = {
    music: [],
};

export const musicReducer = (state = defaultState, action) => {
    switch (action.type) {

        case ADD_MUSIC:
            return { ...state, music: [...state.music, action.payload] };

        case REMOVE_MUSIC:
            return { ...state, music: [...state.music.filter(item => item.id !== action.payload)] };

        case EDIT_MUSIC:
            return {
                ...state,
                music: state.music.map(movie => {
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