const initialState = {
    products:[],
    cart:[]
};



export const usersReducer = (state=initialState, action)=>{
    switch (action.type) {
       case "fetchProductsUser":
        return {...state, products:action.payload}
        default:
            return state
    }
}