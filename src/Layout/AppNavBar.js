import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {IndexLinkContainer, LinkContainer} from 'react-router-bootstrap'

export default class AppNavBar extends React.Component {
  render () {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Header className="nav-header">
          <Navbar.Brand>
            <span className="fa fa-windows fa-2x" />
            <span>Product Browser</span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <IndexLinkContainer to="/">
              <NavItem>Browse Products</NavItem>
            </IndexLinkContainer>
            <LinkContainer to="/about">
              <NavItem>About</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

