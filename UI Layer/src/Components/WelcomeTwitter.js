import React, { Component } from 'react'
import {Jumbotron} from 'react-bootstrap'

class WelcomeTwitter extends Component {
    render() {
        return (
            <div align = "center" >
                <Jumbotron className = 'bg-dark text-white'>
                    <h1>Welcome to Twitter UI</h1>
                </Jumbotron>
            </div>
        )
    }
}

export default WelcomeTwitter
