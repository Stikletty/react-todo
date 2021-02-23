import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }
  createTasks(item) {
    return (
      <ListGroup.Item as="li" key={item.key}>
        {item.text}
        <Button class="text-align-right"onClick={() => this.delete(item.key)}>Delete</Button>
      </ListGroup.Item>
    );
  }

  delete(key) {
    this.props.delete(key);
  }
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ListGroup as="ul">
        {listItems}
      </ListGroup>
    );
  }
}

export default TodoItems;
