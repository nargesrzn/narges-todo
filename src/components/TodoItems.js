import React, { Component } from "react";
import TodoItem from "./TodoItem";
import { observer } from "mobx-react";

@observer
class TodoItems extends Component {
  state = {};
  getVisibleTodos() {
    return this.props.todos.filter(todo => {
      if (this.props.viewStore === 1) {
        return !todo.completed;
      } else if (this.props.viewStore === 0) {
        return todo;
      } else if (this.props.viewStore === 2) {
        return todo.completed;
      }
    });
  }
  render() {
    return (
      <section className="main">
        <ul className="todo-list">
          {this.getVisibleTodos().map(todo => {
            return <TodoItem todo={todo} />;
          })}
        </ul>
      </section>
    );
  }
}

export default TodoItems;
