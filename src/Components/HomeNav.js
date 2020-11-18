import React from 'react'
import{Navbar,Nav} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';

const HomeNav = () => {
    return (
  <Navbar collapseOnSelect expand="lg" className="navbar" variant="dark">
  <Navbar.Brand className="navbrand" href="#home">CoronaVirus
  <br/>
  <span>GLOBAL</span></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto nav">
    
    <NavLink  exact activeClassName="navbar__link--active" className="navlink" to="/">Tracker</NavLink>
    <NavLink activeClassName="navbar__link--active" className="navlink" to="/Dashboard">Dashboard</NavLink>
    <NavLink activeClassName="navbar__link--active"  className="navlink"to="/precautions">Advice</NavLink>
    <NavLink  activeClassName="navbar__link--active"className="navlink" to="/about">About</NavLink>
 </Nav>
    
  </Navbar.Collapse>
</Navbar>
        
    )
}

export default HomeNav
