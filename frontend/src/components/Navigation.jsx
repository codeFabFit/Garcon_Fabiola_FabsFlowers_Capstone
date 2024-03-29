// import React from 'react'
import { Container, Nav, Navbar, Badge} from 'react-bootstrap'
import SearchBox from './SearchBox'
import ProductView from '../views/ProductView'
import { Link } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'

const Navigation = () => {
  return (
    <Navbar bg="dark" variant='dark' expand='lg'>
          <Container>
            <Link to="/">
              <Navbar.Brand>Fabs Flowers</Navbar.Brand>
            </Link>

            <Nav className='me-auto'>
            <Link to="/aboutus" className='nav-link'>About Us</Link>
           
              <Link to="/signin" className='nav-link'>Sign In</Link>
              {/* <Link className="nav-link" to="/signin" /> */}
                  <SearchBox />
              <br/>
            <Link to="/cart" className='nav-link'>
              Cart
              <span>
                <Badge pill bg="info">{ProductView.length}</Badge>
              </span>
              </Link>
            </Nav>
            <DropdownButton
        id="dropdown-button-dark-example2"
        variant="secondary"
        title="Support Us"
        className="mt-2"
        data-bs-theme="dark"
      >
        <Dropdown.Item href="/" active>
          FabsFlowers
        </Dropdown.Item>
        <Dropdown.Item href="www.facebook.com/">Follow Social Media</Dropdown.Item>
        <Dropdown.Item href="https://www.waitroseflorist.com/inspiration-and-advice/care-guides/caring-for-your-flowers">Flower Care</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="https://www.paypal.com/">Donate</Dropdown.Item>
      </DropdownButton>
            
          </Container>
        </Navbar>
  )
}

export default Navigation
