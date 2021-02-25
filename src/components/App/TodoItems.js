import React, { Component } from "react";
import { ListGroup, Button } from "react-bootstrap";

class TodoItems extends Component {
  constructor(props) {
    super(props);  

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    return (
      <ListGroup.Item as="li" key={item.key} className=" mt-3 border rounded">
        <div>
          <div id="taskText" className="text-justify">
            {item.text} <br />
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between">
          <small className="text-muted">{new Date(item.key).toJSON().slice(0, 10)}</small>
          <Button variant="danger" className="ml-auto" onClick={() => this.delete(item.key)}>
            Delete
          </Button>
        </div>
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
      <div>
        <hr class="hr" />
        <div>
          {" "}
          <ListGroup as="ul">{listItems}</ListGroup>
        </div>
      </div>
    );
  }
}

export default TodoItems;
