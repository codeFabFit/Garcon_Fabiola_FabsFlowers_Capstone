// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import data from "./data"
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import HomeView from "./views/HomeView"
import ProductView from './views/ProductView'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
// import {LinkContainer} from 'react-router-bootstrap'
// removed because it wasnt rendering products 



function App() {

  return (
    
    <BrowserRouter>
    <div className='d-inline-flex flex-column site-container'>
      <header>
        <Navbar bg="dark" variant='dark'>
          <Container>
            {/* <LinkContainer to="/"> */}
            
            <Link to="/">FabsFlowers</Link>
            {/* </LinkContainer> */}
          </Container>
        </Navbar>
        {/* you want to change from a href to link stop page refresh */}
       {/* we are removing this one below bc we are using bootstrap */}
        {/*  */}

        {/* <Navbar.Brand>FabsFlowers</Navbar.Brand> */}
       </header>  
          <main>

            {/* add routing here */}
            <Container className='mt-3'>
                  <Routes>
                  <Route path="/product/:slug" element={<ProductView />}></Route>
                  <Route path="/" element={<HomeView />}></Route>
                </Routes>
          </Container>
      </main>
      <footer>
        <div className='text-center'>
          All Rights Reserved @ Fabiola Garcon
        </div>
      </footer>
       </div>    
   </BrowserRouter>
    
  )
}

export default App
