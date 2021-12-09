import { combineReducers } from "redux";
import { cashReducer } from "./cashReducer";
import { customersReducer } from "./customersReducer";

const reducer = combineReducers({
    cash: cashReducer,
    customers: customersReducer
});

export default reducer;