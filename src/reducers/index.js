import { combineReducers } from "redux";
import { typeOfContentReducer } from "./typeOfContentReducer";
import { contentReducer } from "./contentReducer";

const reducer = combineReducers({
    typeOfContent: typeOfContentReducer,
    content: contentReducer,
});

export default reducer;