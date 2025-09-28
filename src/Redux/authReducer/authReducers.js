const initialState = {
    user:{},
    isLoggedIn:false,
    jwtToken:null
};



export const authReducer = (state=initialState, action)=>{
    switch (action.type) {
       case "login":{
        return {...state, user: action.payload.userInfo, jwtToken:action.payload.token, isLoggedIn:true}
       }
       case 'logout':{
            return {...state,user:{},isLoggedIn:false,jwtToken:null}
       }
        default:
            return state
    }
}