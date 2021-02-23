import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import TodoItems from "./TodoItems";
import "./TodoList.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
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

    console.log(this.state.items);

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
    return (
      <Container className="todoListMain">
        <div className="header">
          <Form inline onSubmit={this.addItem}>
            <Form.Control type="text" ref={(a) => (this._inputElement = a)} placeholder="enter task"></Form.Control>
            <Button type="submit">add</Button>
          </Form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} id="todoList"/>
      </Container>
    );
  }
}

export default TodoList;
