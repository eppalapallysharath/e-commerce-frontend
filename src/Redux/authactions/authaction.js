import axios from "axios";
import { baseUrl } from "../../App";
import toast from "react-hot-toast";


export const singUpAction = (data, navigate) => {
  return (dispatch) => {
    axios
      .post(`${baseUrl}/users/signup`, data)
      .then((res) => {
        alert(res.data.message);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data?.message);
      });
  };
};

export const loginAction = (data, navigate) => {
  return (dispatch) => {
    axios
      .post(`${baseUrl}/users/login`, data)
      .then((res) => {
        toast(res?.data?.message);
        if (res?.data.userInfo.role == "user") {
            dispatch({
                type:"login",
                payload: res.data
            })
            navigate("/user/products")
        }
        if(res?.data.userInfo.role == "admin"){
            dispatch({
                type:"login",
                payload: res.data
            })
            navigate("/admin/products")
        }

      })
      .catch((err) => {
        console.log(err);
        alert(err?.response?.data?.message);
      });
  };
};


export const LogoutAction = () =>{
    return {
        type:"logout"
    }
}