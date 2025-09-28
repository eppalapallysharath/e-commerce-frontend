// src/Redux/AdminActions/adminAction.js
import axios from "axios";
import { baseUrl } from "../../App";

export const fetchProductsAdmin = (token) => (dispatch) => {
  axios.get(`${baseUrl}/products/`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(res => dispatch({ type: "fetchProductsAdmin", payload: res.data.allData }))
  .catch(err => console.log(err))
}

export const deleteProduct = (id, token) => (dispatch) => {
  axios.delete(`${baseUrl}/products/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
  })
  .then(() => dispatch(fetchProductsAdmin(token)))
  .catch(err => console.log(err))
}

export const addProductRequest = () => ({ type:"ADD_PRODUCT_REQUEST"});
export const addProductSuccess = (product) => ({ type: "ADD_PRODUCT_SUCCESS", payload: product });
export const addProductFailure = (error) => ({ type: "ADD_PRODUCT_FAILURE", payload: error });

export const addProduct = (form, image, token) => async (dispatch) => {
  dispatch(addProductRequest());

  try {
    const data = new FormData();
    Object.keys(form).forEach(key => data.append(key, form[key]));
    data.append("image", image);

    const response = await axios.post(`${baseUrl}/products/`, data, {
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" }
    });

    dispatch(addProductSuccess(response.data));
    alert("Product Added Successfully");
  } catch (error) {
    dispatch(addProductFailure(error));
    console.error(error);
  }
};