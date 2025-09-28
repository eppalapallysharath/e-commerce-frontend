import axios from "axios"
import { baseUrl } from "../../App"
import toast from "react-hot-toast"

export const fetchProductsListUser = () =>{
    return (dispatch)=>{
        axios.get(`${baseUrl}/products/`)
        .then(res=> dispatch({type: "fetchProductsUser" ,payload:res?.data?.allData}))
        .catch(er => console.log(er))
    }
}


export const fetchCart = (token) => {
  return (dispatch) => {
    axios.get(`${baseUrl}/cart/getall`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => dispatch({ type: "fetchCart", payload: res.data }))
    .catch(err => console.log(err));
  }
}

export const addToCart = (productId, token) => {
  return (dispatch) => {
    axios.post(`${baseUrl}/cart/add`, { productId }, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {toast(res.data.message);dispatch(fetchCart(token))}) // refresh cart
    .catch(err => console.log(err));
  }
}

export const deleteFromCart = (id, token) => {
  console.log(id)
  return (dispatch) => {
    axios.delete(`${baseUrl}/cart/delete/${id}`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then((res) => {toast(res.data.message); dispatch(fetchCart(token))})
    .catch(err => console.log(err));
  }
}