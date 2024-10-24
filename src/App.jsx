import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavBar/Navbar'
// import {Shop} from './Pages/Shop'

import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import ShowCategory from './Pages/ShowCategory'
// import LoginSignup from './Pages/Signup'
import Product from './Pages/Product'
import Footer from './Components/Footer/Footer'
import man_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import PrivateRoute from './Pages/PrivateRoute'


function App() {


  return (
    <>

    {/* <Shop/> */}
    {/* <Cart/> */}
     <BrowserRouter> 
     <Navbar/>

          <Routes>
          <Route 
          path="/" 
          element={
              <Shop/>
          } 
        />
            {/* <PrivateRoute></PrivateRoute><Route path='/' element={<Shop/>}/> */}
            <Route path='/mens' element={<ShowCategory banner={man_banner} category="men"/>}/>
            <Route path='/womens' element={<ShowCategory banner={women_banner} category="women"/>}/>
            <Route path='/kids' element={<ShowCategory banner={kid_banner} category="kid"/>}/>
            <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/> }/>
            </Route>
            <Route path='/cart' element={
            <PrivateRoute>

            <Cart/>
            </PrivateRoute>

            }/>

            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>



          </Routes> 
          <Footer/>
     </BrowserRouter> 


    </>
  )
}

export default App
