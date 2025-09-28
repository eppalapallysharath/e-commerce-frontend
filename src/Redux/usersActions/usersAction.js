import axios from "axios"
import { baseUrl } from "../../main"

export const fetchProductsListUser = () =>{
    return (dispatch)=>{
        axios.get(`${baseUrl}/products/`)
        .then(res=> dispatch({type: "fetchProductsUser" ,payload:res?.data?.allData}))
        .catch(er => console.log(er))
    }
}