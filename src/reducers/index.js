import { combineReducers } from "redux";
import { contentReducer } from "./contentReducer";
import { booksReducer } from "./booksReducer";
import { moviesReducer } from "./moviesReducer";
import { musicReducer } from "./musicReducer";

const reducer = combineReducers({
    typeOfContent: contentReducer,
    books: booksReducer,
    movies: moviesReducer,
    music: musicReducer,
});

export default reducer;