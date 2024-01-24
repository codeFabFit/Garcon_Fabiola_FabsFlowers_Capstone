import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import StoreContext from "../context-and-reducer/StoreContext";

export function SigninScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });

  const { dispatch } = useContext(StoreContext);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const submitHandler = async (e) => {
    console.log(formData)
    e.preventDefault();

    try {
      const { data } = await axios.post('http://localhost:5000/api/users/signin', {
        email: formData.email,
        password: formData.password,
      });

      dispatch({ type: 'USER_SIGNIN', payload: data });
      if (formData.rememberMe) {
        localStorage.setItem('userInfo', JSON.stringify(data));
      }
      navigate(formData.redirect || '/');
      console.log(data);
    } catch (err) {
      alert("Mistake with Email or Password. Please Try again.");
    }
  };

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  return (
    <Container className="small-container">



      <h1 className="mb-3">Sign Into Your Account</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="rememberMe" className="mb-3">
          <Form.Check
            type="checkbox"
            label="Remember Me"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button type="submit">Sign In</Button>
      </Form>
      <div className="mt-3">
        New Customer?{' '}
        <Link to={`/signup?redirect=${redirect}`}>Create Your Account</Link>
      </div>

      
      <div className="mt-3">

      <img className="logo-img" src="https://static.vecteezy.com/system/resources/previews/008/420/922/original/flower-alphabet-f-logo-vector.jpg"></img>

        <span>Follow Us on Social Media</span>{' '}
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>{' '}
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
    </Container>
  );
}

export default SigninScreen;

// need to redo 


// import React from 'react'
// import axios from "axios"
// import {Link, useLocation, useNavigate} from "react-router-dom"
// import Button from "react-bootstrap/Button"
// import { useState, useContext } from "react"

// import Form  from "react-bootstrap/Form"
// import Container from 'react-bootstrap/Container'
// import { StoreContext } from "../context-and-reducer/StoreContext"
// // import { Navbar } from "react-bootstrap"


// export function SigninScreen() {

//     const navigate = useNavigate();
//     const { search } = useLocation()
//     const redirectInUrl = new URLSearchParams(search).get('redirect');
//     const redirect = redirectInUrl ? redirectInUrl : '/';

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const { dispatch: ctxDispatch} = useContext(StoreContext)
//     // const userInfo = state;


//         const submitHandler = async (e) => {
//             e.preventDefault();
//             try {
//                 const { data } = await axios.post('http://localhost:5000/api/users/signin', {
//                     email,
//                     password,
//                 });
//                 ctxDispatch({type: 'USER_SIGNIN', payload: data})
//                 localStorage.setItem('userInfo', JSON.stringify(data))
//                 navigate(redirect || '/')
                
//                 console.log(data)
//             } catch (err) {
//                 alert("Invaild Email or Password. Try again.")
//             }
            
//         } 
// // redo form and do with regular state
// // use form to make post request 
//   return (  
//         <Container className="small-container">
//             <h1 className="mb-3">Sign In</h1>
//                 <Form onSubmit={submitHandler}>
//                     <Form.Group className="mb-3" controlId="email">
//                         <Form.Label>Email</Form.Label>
//                         <Form.Control type="email" required onChange={(e) => setEmail(e.target.value)}/>
//                     </Form.Group>
//                     <Form.Group className="mb-3" controlId="password">
//                         <Form.Label>Password</Form.Label>
//                         <Form.Control type="password" required onChange={(e) => setPassword(e.target.value)}/>
//                         <div className="mb-3">
//                             <Button type="submit">Sign In</Button>
//                         </div>
//                         <div className="mb-3">
//                             New Customer? {' '}
//                             <Link to={`/signup?redirect=${redirect}`}>Create Your Account</Link>
//                         </div>
//                     </Form.Group>
//                 </Form>
//         </Container>
//   )
// }

// export default SigninScreen