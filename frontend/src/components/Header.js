import React from "react";
import { Navbar, Container, Nav, FormControl, Form, Button } from 'react-bootstrap';

const Header = (props) => {
    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
        <Navbar.Brand href="#">{props.title}</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">Home</Nav.Link>
        <Nav.Link href="#action2">Link</Nav.Link>
      </Nav>
      <Form className="d-flex" onSubmit={props.handleSubmit}>
        <FormControl
          type="text"
          value={props.word}
          onChange={(e) => props.setWord(e.target.value)}
          placeholder="Search Image"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success" type="submit">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>

    )

}
export default Header;