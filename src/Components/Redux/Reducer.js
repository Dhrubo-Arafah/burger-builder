import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import BurgerReducer from "./BurgerReducer";

const Reducer = combineReducers({
 burger: BurgerReducer,
 auth:AuthReducer
})

export default Reducer