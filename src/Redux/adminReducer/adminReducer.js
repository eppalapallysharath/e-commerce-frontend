const initialState = {
  loading: false,
  products: [],
  error: null
};

export const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchProductsAdmin":
      return { ...state, products: action.payload };
    case "ADD_PRODUCT_REQUEST":
      return { ...state, loading: true };
    case "ADD_PRODUCT_SUCCESS":
      return { ...state, loading: false, products: [...state.products, action.payload] };
    case "ADD_PRODUCT_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
