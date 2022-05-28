import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Button } from "react-bootstrap"


function Shorts() {
    const [url, setUrl] = useState();

    let onSubmit = (evt) => {
        evt.preventDefault();
        console.log(url)
        axios.post("/shorten", { "url": url })
    }

    function handleChange(evt) {
        setUrl(evt.target.value);
    }

    return (
        <Container className="p-5">
            <Form onSubmit={onSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email URL</Form.Label>
                    <Form.Control onChange={handleChange} name="url" type="url" placeholder="Enter Url" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Shorten
                </Button>
            </Form>
        </Container>
    )
}

export default Shorts