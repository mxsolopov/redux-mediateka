import { CHANGE_CONTENT } from "../actions/actions";

const defaultState = {
    typeOfContent: 'books',
};

export const typeOfContentReducer = (state = defaultState, action) => {
    switch (action.type) {

        case CHANGE_CONTENT:
            return { ...state, typeOfContent: action.payload };

        default:
            return state;
    }
};