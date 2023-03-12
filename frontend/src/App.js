import './App.css';
import { Component } from 'react';
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Redirect,
  Route,
} from "react-router-dom";


import Home from './pages/Home';
import ProductsPage from './pages/ProductsPage'
import Product from './pages/Product'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {



  return (
    <Router>
      <Routes>
          <Route exact path="/"  element={<Home />} />

          <Route path="/apparel/:category"  element={<ProductsPage />} />

          <Route path="/apparel/:category/:productname"  element={<Product />} />

          <Route path="/login" element={<Login />} />
          {/* <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route> */}

          <Route path="/register" element={<Register />} />
          {/* <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route> */}
      </Routes>
    </Router>
  )

}

export default App;
