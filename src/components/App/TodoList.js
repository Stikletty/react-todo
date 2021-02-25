import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      listItemsCount: 0,
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem),
        };
      });

      this._inputElement.value = "";
    }

    // console.log(this.state.items);

    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
    });
  }

  render() {
    const buttonStyle = {};

    return (
      <Container id="todoListMain">
        <Form className="d-flex align-items-center justify-content-between" onSubmit={this.addItem}>
          <Form.Label>Task: </Form.Label>
          <Form.Control autoFocus className="m-2" type="text" ref={(a) => (this._inputElement = a)} placeholder="Enter task" required></Form.Control>
          <Button className="text-nowrap" type="submit" style={buttonStyle}>
            Add New Task
          </Button>
        </Form>
        <small className="d-flex flex-row-reverse text-muted">Currently {this.state.items.length} task(s) in list.</small>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </Container>
    );
  }
}

export default TodoList;
