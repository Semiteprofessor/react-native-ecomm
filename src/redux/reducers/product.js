/** @format */

import { GET_PRODUCTS_BY_CATEGORY, GET_PRODUCT_DETAIL } from "../actions/types";
import { productsData, PopularProducts } from "../../data";
const initialState = {
  products: productsData,
  categoryProducts: [],
  popularProducts: PopularProducts,
  loading: false,
};

const productReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    default:
      return state;
  }
};

export default productReducer;
