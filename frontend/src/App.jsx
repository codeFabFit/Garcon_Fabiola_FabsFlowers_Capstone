
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'
import HomeView from "./views/HomeView"
import ProductView from './views/ProductView'
import Navbar from 'react-bootstrap/Navbar'
import { Badge,  Nav,} from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast' 
import Container from 'react-bootstrap/Container'
import { StoreProvider } from './context-and-reducer/StoreContext'
import CartView from './components/CartView'
import SigninScreen from './components/SigninScreen'
import { useState, useEffect } from 'react'
import SearchBox from './components/SearchBox'
import axios from 'axios'
import AboutUs  from './components/AboutUs'


function App() {

  // const [sideMenuIsOpen, setMenuIsOpen] = useState(false)
  const [categories, setCategories] = useState([])
    // const userInfo = state;


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
    {/* makingfirst div conditional */}
    <div>
      <header>
        <Navbar bg="dark" variant='dark' expand='lg'>
          <Container>
            <Link to="/">
              <Navbar.Brand>Fabs Flowers</Navbar.Brand>
            </Link>
            {/* <Navbar.Toggle aria-controls='basic-navbar-nav'/> */}
            {/* <Navbar.Collapse id='me-auto w-100 justify-content-end'></Navbar.Collapse> */}
            {/* <Link to="/aboutus">About Us</Link> */}
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
        </Navbar>
      
        {/* <Navbar.Brand>FabsFlowers</Navbar.Brand> */}
       </header>  

       {/* <div
       className={
        sideMenuIsOpen 
        ? 'active-nav side-navbar d-flex justify-content-between flex-wrap flex-column'
        : 'side-navbar d-flex justify-content-between flex-wrap flex-column'
       }
       >
            <Nav className="flex-column text-blue w-100 p-2">
               <Navbar.Toggle aria-controls='basic-navbar-nav'/>
              <Button
             
            variant="dark"
            onClick={() => setMenuIsOpen(!sideMenuIsOpen)}
            >More
              <i className='fas fa-bars'></i>
            </Button>
                <Nav.Item>

                </Nav.Item>
              {Array.isArray(categories) && categories.map((category) =>
              <Nav.Item key={category}>
                <Link to ={`/search?category=${category}`}
                onClick={() => setMenuIsOpen(false)}>
                  <Nav.Link>{category}</Nav.Link>
                </Link>
              </Nav.Item>)}
            </Nav>
       </div> */}
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
