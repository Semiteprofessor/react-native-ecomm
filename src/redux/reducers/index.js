/** @format */

import { combineReducers } from "redux";
import product from "../reducers/product";
import cart from "./cart";

export default combineReducers({
  product,
  cart,
});
