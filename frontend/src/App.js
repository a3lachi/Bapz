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


const App = () => {



  return (
    <Router>
      <Routes>
          <Route exact path="/"  element={<Home />} />
      </Routes>
      <Routes>
          <Route path="/apparel/:category"  element={<ProductsPage />} />
      </Routes>

    </Router>
  )

}

export default App;
