import React, { Component } from 'react'

import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
/**
* This component provides links to all other components
*
* @author Mamatha Guntu
*/
class NavigationBar extends Component {
    render() {
        return (
            
           <Navbar bg = 'dark' variant = 'dark'>
           <Link to = {""} className="navbar-brand">CMPE272 TWITTER</Link>
            <Nav className="mr-auto">
				<Link to={"create"} className="nav-link">Create Tweet</Link>
				<Link to={"retrieve"} className="nav-link">Retrieve Tweet</Link>
				<Link to={"delete"} className="nav-link">Delete Tweet</Link>
            </Nav>
            </Navbar>
        )
    }
}

export default NavigationBar
