import './App.css';
import {
  BrowserRouter as Router,
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
import { useSelector  } from "react-redux";
import { updateCart } from './redux/cartSlice';
import {   setJwt } from './redux/userSlice'
import { store } from './redux/store'
import Checkout from './pages/Checkout';
import styled from 'styled-components';


const App = () => {

  const user = useSelector((state) =>  state.user.email) ;
  var cart = useSelector((state) =>  state.cart.itms)

  const jwt = useSelector((state) =>  state.user.jwt)

  


  const maybeJwt = document.cookie.split("; ").map(element => element.split('=')).filter(element => element[0]==='jwt')[0]
  const jwwt = maybeJwt ? maybeJwt[1] : ""
  
  // jwt is found to be equal to "jwt=expiry date" right after deleting the cookie
  if (jwwt.length > jwt.length || jwt.split('=').length>1) {
    store.dispatch(setJwt(jwwt))
  }

  const storedCart =  JSON.parse(window.localStorage.getItem('state')) 
  if (cart?.length === 0 && storedCart?.length>0) {
    store.dispatch(updateCart())
  }

  const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `

  return (
    <Container>
      <Router>
        <Routes>
            <Route exact path="/"  element={<Home id={user} />} />

            <Route path="/apparel/:category"  element={<ProductsPage id={user}  />} />

            <Route path="/apparel/:category/:productname"  element={<Product id={user}  />} />

            <Route path="/login" element={  jwt.length>2 ? <Navigate to='/' /> : <Login />  }    />

            <Route path="/profil"  element={  jwt?.length>5 ?   <Profil /> : <Navigate to='/' /> } />
              

            <Route path="/register" element={ jwt.length>2 ? <Navigate to='/' /> :  <Register />} />

            <Route path="/cart" element={ <Cart id={user}  />} />

            <Route path="/checkout" element={ cart?.length>0 ? <Checkout prods={cart}  /> : <Navigate to='/' />  } />

        </Routes>
      </Router>
    </Container>
  )

}

export default App;
