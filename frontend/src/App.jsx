// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import data from "./data"
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import HomeView from "./views/HomeView"
import ProductView from './views/ProductView'
import Navbar from 'react-bootstrap/Navbar'
import { Badge, Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import { StoreProvider } from './context-and-reducer/StoreContext'
import CartView from './components/CartView'
import SigninScreen from './components/SigninScreen'
// import { createBrowserRouter } from 'react-router-dom'
// import { Router } from 'react-router-dom'

// import { useContext } from 'react'
// import { useContext } from 'react'
// import { Store } from './Store'

// import {LinkContainer} from 'react-router-bootstrap'
// removed because it wasnt rendering products 



function App() {

    
                // trying to figure out how to get clicked items to show on cart nav
  // const {state = useContext(StoreContext);
  // const {CartView} = state

  return (
    <StoreProvider>
    <BrowserRouter>
    <div className='d-inline-flex flex-column site-container'>
      <header>
        <Navbar bg="dark" variant='dark'>
          <Container>
            
            <Link to="/">FabsFlowers</Link>
            <Nav>
              <Link to="/signin">Sign In</Link>
              <br/>
            <Link to="/cart">
              Cart
              <span>
                <Badge pill bg="info">{CartView.length}</Badge>
              </span>
              </Link>
            </Nav>
            
            
          </Container>
        </Navbar>
      
        {/* <Navbar.Brand>FabsFlowers</Navbar.Brand> */}
       </header>  
          <main>

            {/* add routing here */}
            <Container className='mt-3'>
              
              
                  <Routes>
              
                  <Route path="/product/:slug" element={<ProductView />}></Route>
                  <Route path="/" element={<HomeView />}></Route>
                  <Route path="/cart" element={<CartView />}></Route>
                  <Route path="/signin" element={<SigninScreen />}></Route>
            

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
    </StoreProvider>
  )
}

export default App
