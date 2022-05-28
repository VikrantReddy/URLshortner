import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Button } from "react-bootstrap"


function Login() {
    const [formData, setFormdata] = useState(new Map());

    let onSubmit = (evt) => {
        evt.preventDefault();
        axios.post("user/login", Object.fromEntries(formData))
    }

    function handleChange(evt) {
        let tmp = new Map();
        tmp.set(evt.target.name, evt.target.value)
        tmp = new Map([...formData, ...tmp])
        setFormdata(tmp);
    }

    return (
        <Container className="p-5">
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={handleChange} name="email" type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={handleChange} name="password" type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Login