import { useState } from 'react'

import Navbar from "./assets/components/Navbar"
import Search from "./assets/components/Search"
import Products from "./assets/components/Products"
import Aboutone from './assets/components/Aboutone'
import Footer from './assets/components/Footer'

function App() {
  return (
    <div className='container'>
    <Navbar></Navbar>
    <Search></Search>
    <Products></Products>
    <Aboutone></Aboutone>
   <Footer></Footer>
  </div>
  )
}

export default App
