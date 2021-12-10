import { ADD_BOOK, REMOVE_BOOK, EDIT_BOOK } from "../actions/actions";

const defaultState = {
    books: [],
};

export const booksReducer = (state = defaultState, action) => {
    switch (action.type) {

        case ADD_BOOK:
            return { ...state, books: [...state.books, action.payload] };

        case REMOVE_BOOK:
            return { ...state, books: [...state.books.filter(item => item.id !== action.payload)] };

        case EDIT_BOOK:
            return {
                ...state,
                books: state.books.map(book => {
                    if (book.id === action.payload.id) {
                        return { ...book, [action.payload.prop]: action.payload.value };
                    } else {
                        return book;
                    }
                })
            };
        default:
            return state;
    }
};