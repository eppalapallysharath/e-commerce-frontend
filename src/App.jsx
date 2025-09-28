import React from 'react'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import UserDashboardPage from './Pages/UserDashboardpage'
import CartPage from './Pages/CartPage'
import AdminDashboardPage from './Pages/AdminDashboardPage'
import AddProduct from './Pages/AddProduct'
import PageNotFound from './Pages/PageNotFound'
import AdminProductsList from './Pages/AdminProductsList'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import ProductsListPage from './Pages/ProductsListPage'
 
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage/>}>
       <Route path='login' element={<LoginPage/>} />
      <Route path='signup' element={<SignupPage/>} />
      </Route>
      <Route path='/user' element={<UserDashboardPage/>}>
        <Route path='products' element={<ProductsListPage/>}/>
        <Route path='cart' element={<CartPage/>}/>
      </Route>
      <Route path='/admin' element={<AdminDashboardPage/>}>
        <Route path='addProducts' element={<AddProduct/>}/>
        <Route path='products' element={<AdminProductsList/>}/>
      </Route>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes> 
  )
}

export default App