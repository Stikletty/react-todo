import React, { Component } from "react";
import { Container } from "react-bootstrap";


class TodoHeader extends Component {
  render() {
    const todayDate = new Date().toJSON().slice(0, 10);
    return (
      <Container className="d-flex justify-content-between align-items-baseline">
        <h1>Todo List</h1>
        <small>Today is: {todayDate}</small>
      </Container>
    );
  }
}

export default TodoHeader;
