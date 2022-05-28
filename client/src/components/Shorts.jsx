import axios from 'axios'
import React, { useState } from 'react'
import { Container, Form, Button, Alert } from "react-bootstrap"


function Shorts() {
    const [url, setUrl] = useState();
    const [shortUrl, setShortURL] = useState();

    let onSubmit = (evt) => {
        evt.preventDefault();
        console.log(url)
        axios.post("shorts/shorten", { "url": url }).then((res) => {
            setShortURL(res.data);
        })
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

            <Alert><a href={`/shorts/${shortUrl}`}>{shortUrl !== undefined ? "The short url is http://www.localhost:8000/shorts/" + shortUrl : "Click the button"} </a></Alert>

        </Container>
    )
}

export default Shorts