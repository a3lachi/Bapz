import './App.css';
import { Component } from 'react';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Navigate,
  Route,
} from "react-router-dom";


import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage'
import Product from './pages/Product'
import Login from './pages/Login'
import Profil from './pages/Profil'
import Register from './pages/Register'
import Cart from './pages/Cart'
import { useSelector } from "react-redux";
import { updateCart } from './redux/cartSlice';
import { updateUser } from './redux/userSlice'
import { store } from './redux/store'
import Checkout from './pages/Checkout';

const App = () => {

  const user = useSelector((state) =>  state.user.email) ;
  var cart = useSelector((state) =>  state.cart.itms)

  const storedCart =  JSON.parse(window.localStorage.getItem('state')) 
  const storedUser =  JSON.parse(window.localStorage.getItem('user')) 



  if (cart?.length == 0 && storedCart?.length>0) {
    store.dispatch(updateCart())
  }

  if (user?.length == 0 && storedUser?.length>0) {
    store.dispatch(updateUser())
  }

  return (
    <Router>
      <Routes>
          <Route exact path="/"  element={<Home id={user} />} />

          <Route path="/apparel/:category"  element={<ProductsPage id={user}  />} />

          <Route path="/apparel/:category/:productname"  element={<Product id={user}  />} />

          <Route path="/login" element={  user.length>2 ? <Navigate to='/' /> : <Login />  }    />

          <Route path="/profil"  element={<Profil id={user} />} />
             

          <Route path="/register" element={ user.length>2 ? <Navigate to='/' /> :  <Register />} />

          <Route path="/cart" element={ <Cart id={user}  />} />

          <Route path="/checkout" element={ <Checkout prods={cart}  />} />

      </Routes>
    </Router>
  )

}

export default App;
