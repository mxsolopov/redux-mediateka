import { combineReducers } from "redux";
import { contentReducer } from "./contentReducer";

const reducer = combineReducers({
    typeOfContent: contentReducer,
});

export default reducer;