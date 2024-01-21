// import React from 'react'

// import {useLocation} from "react-router-dom"
import Button from "react-bootstrap/Button"
// import  Link  from "react-bootstrap"
import { Form } from "react-bootstrap"
import Container from 'react-bootstrap/Container'


export function SigninScreen() {
    // const { search } = useLocation()
    // const redirectInUrl = new URLSearchParams(search).get('redirect');
    // const redirect = redirectInUrl ? redirectInUrl : '/';


  return (  
        <Container className="small-container">
            <h1 className="mb-3">Sign In</h1>
                <Form>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" required/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" required/>
                        <div className="mb-3">
                            <Button type="submit">Sign In</Button>
                        </div>
                        {/* <div className="mb-3">
                            New Customer? {' '}
                            <Link to={`/signup?redirect=${redirect}`}>Create Your Account</Link>
                        </div> */}
                    </Form.Group>
                </Form>
        </Container>
  )
}

export default SigninScreen