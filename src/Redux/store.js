import { legacy_createStore,combineReducers, compose, applyMiddleware } from "redux";
import {thunk} from 'redux-thunk'
import { adminReducer } from "./adminReducer/adminReducer";
import { authReducer } from "./authReducer/authReducers";
import { usersReducer } from "./userReducer/userReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
  
const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({
    adminReducer: adminReducer,
    userReducer: usersReducer,
    authReducer:authReducer,
})

const composer = compose(applyMiddleware(thunk) ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = legacy_createStore(persistedReducer, composer)
export const persistorStore = persistStore(store)
