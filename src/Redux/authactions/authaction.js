import axios from "axios";
import { baseUrl } from "../../main";

export const singupAction = (data, navigate) => {
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
        alert(res?.data?.message);
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