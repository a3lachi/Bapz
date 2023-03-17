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


const App = () => {

  const user = useSelector((state) =>  state.user.email) ;
  return (
    <Router>
      <Routes>
          <Route exact path="/"  element={<Home id={user} />} />

          <Route path="/apparel/:category"  element={<ProductsPage id={user}  />} />

          <Route path="/apparel/:category/:productname"  element={<Product id={user}  />} />

          <Route path="/login" element={  user ? <Navigate to='/' /> : <Login />  }    />

          <Route path="/profil"  element={<Profil id={user} />} />
             

          <Route path="/register" element={ user ? <Navigate to='/' /> :  <Register />} />

          <Route path="/cart" element={ <Cart id={user}  />} />

      </Routes>
    </Router>
  )

}

export default App;
