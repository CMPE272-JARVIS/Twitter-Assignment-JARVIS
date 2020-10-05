import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import {Navbar, Col} from 'react-bootstrap'

/**
* This class component displays the footer message
* 
* 
*/
export class Footer extends Component {
    render() {
        let fullYear = new Date().getFullYear();
        return (
            <Navbar fixed = "bottom" bg = "dark" variant = "dark">
                <Container>
                    <Col lg = {12} className = "text-center text-muted">
                        <div>{fullYear}, All Rights Reserved BY Team JARVIS</div>
                    </Col>
                </Container>
            </Navbar>
        )
    }
}

export default Footer
