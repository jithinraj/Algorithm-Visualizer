import React, { Fragment } from 'react';
import { Button, Form, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

import './Header.css';

const Header = (props) => {
  const { fenceToggle, run, reset } = props;

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="#home" children={'Algo-Visualiser'} />
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features" children={'Features'} />
          <Nav.Link href="#pricing" children={'Pricing'} />
          <NavDropdown title="Algorithms" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1" children={'Dijkstra'} />
            <NavDropdown.Item href="#action/3.2" children={'Another action'} />
            <NavDropdown.Item href="#action/3.3" children={'Something'} />
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4" children={'Separated link'} />
          </NavDropdown>
          <Form>
            <Form.Check
              type="checkbox"
              id="fence-check"
              name="fences"
              label="Fences"
              style={{ color: 'white' }}
              onChange={fenceToggle}
            />
          </Form>
        </Nav>
        <Nav variant="center">
          <Button
            id="button"
            variant="primary"
            onClick={run}
            children={"Let's Run Dijkstra"}
          />
          <Button
            id="reset-btn"
            style={{ backgroundColor: 'red' }}
            onClick={reset}
            variant="primary"
            children={'Reset'}
          />
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
export default Header;

Header.propTypes = {
  run: PropTypes.func.isRequired,
  fenceToggle: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};
