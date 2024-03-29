import React from 'react'
import { FaHome } from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Home,
  Error,
  Products,
  SingleProduct,
  About,
  Cart,
  Checkout,
  PrivateRoute
} from './pages'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='cart' element={<Cart/>}/>
        <Route path='products' element={<Products/>}/>
        <Route path='product/:id' element={<SingleProduct/>}/>
        <Route path='checkout' element={
          <PrivateRoute>
            <Checkout/>
          </PrivateRoute>
        }/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App
