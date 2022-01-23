import React from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';

const Search = (props) => {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col xs={10} md={8} lg={6}>
          <Form className="d-flex form-inline" onSubmit={props.handleSubmit}>
            <FormControl
              type="text"
              value={props.word}
              onChange={(e) => props.setWord(e.target.value)}
              placeholder="Search Wallpapers.."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Search;
