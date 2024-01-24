
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomeView from "./views/HomeView"
import ProductView from './views/ProductView'
// import Navbar from 'react-bootstrap/Navbar'
// import { Badge,  Nav,} from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast' 
import Container from 'react-bootstrap/Container'
import { StoreProvider } from './context-and-reducer/StoreContext'
import CartView from './components/CartView'
import SigninScreen from './components/SigninScreen'
import { useState, useEffect } from 'react'
// import SearchBox from './components/SearchBox'
import axios from 'axios'
import AboutUs  from './components/AboutUs'
import Navigation from './components/Navigation'


function App() {

  const [categories, setCategories] = useState([])
   
  useEffect (() => {
    const fetchCategories = async () => {
      try {
        const {data} = await axios.get(`/api/products/categories`)
        setCategories(data)
      } catch(err) {
        Toast.error(Error(err))
      }
    }
fetchCategories()
  }, [categories])



  return (
    <StoreProvider>
    <BrowserRouter>
  
    <div>
      <header>
        <Navigation />
        {/* <Navbar bg="dark" variant='dark' expand='lg'>
          <Container>
            <Link to="/">
              <Navbar.Brand>Fabs Flowers</Navbar.Brand>
            </Link>

            <Nav className='me-auto'>
            <Link to="/aboutus" className='nav-link'>About Us</Link>
           
              <Link to="/signin" className='nav-link'>Sign In</Link>
              <Link className="nav-link" to="/signin" />
                  <SearchBox />
              <br/>
            <Link to="/cart" className='nav-link'>
              Cart
              <span>
                <Badge pill bg="info">{ProductView.length}</Badge>
              </span>
              </Link>
            </Nav>
        
            
          </Container>
        </Navbar> */}
      
   
       </header>  

          <main>

            {/* add routing here */}
            <Container className='mt-3'>
              
              
                  <Routes>
              
                  <Route path="/product/:slug" element={<ProductView />}></Route>
                  <Route path="/" element={<HomeView />}></Route>
                  <Route path="/cart" element={<CartView />}></Route>
                  <Route path="/signin" element={<SigninScreen />}></Route>
                  <Route path="/aboutus" element={<AboutUs />}></Route>

            

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
