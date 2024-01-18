// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import data from "./data"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeView from "./components/HomeView"
import ProductView from './components/ProductView'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import {LinkContainer} from 'react-router-bootstrap'


function App() {

  return (
    
    <BrowserRouter>
    <div className='d-flex flex-colum site-container'>
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
            <Navbar.Brand>FabsFlowers</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
        {/* you want to change from a href to link stop page refresh */}
       {/* we are removing this one below bc we are using bootstrap */}
        {/* <Link to="/">FabsFlowers</Link> */}
       </header>  
          <main>

            {/* add routing here */}
            <Container>
                  <Routes>
                  <Route path="/products/:slug" element={<ProductView />}></Route>
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
