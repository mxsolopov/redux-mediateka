import { ADD_ITEM, REMOVE_ITEM, EDIT_ITEM } from "../actions/actions";

const defaultState = {
    content: [],
};

export const contentReducer = (state = defaultState, action) => {
    switch (action.type) {

        case ADD_ITEM:
            console.log(action.payload);
            return { ...state, content: [...state.content, action.payload] };

        case REMOVE_ITEM:
            return { ...state, content: [...state.content.filter(item => item.id !== action.payload)] };

        case EDIT_ITEM:
            return {
                ...state,
                content: state.content.map(item => {
                    if (item.id === action.payload.id) {
                        return { ...item, [action.payload.prop]: action.payload.value };
                    } else {
                        return item;
                    }
                })
            };
        default:
            return state;
    }
};