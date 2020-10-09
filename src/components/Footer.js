import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from "../stores/TodoStore";
import { action } from "mobx";

@observer
class Footer extends Component {
  state = {};
  @action
  clearCompleted = () => {
    todoStore.clearCompleted();
  };
  showAll = () => {
    todoStore.views = 0;
  };
  showActive = () => {
    todoStore.views = 1;
  };
  showCompleted = () => {
    todoStore.views = 2;
  };

  render() {
    return (
      <div className="footer">
        <div className="todo-count">
          <strong>{todoStore.activeTodoCount} items left</strong>
        </div>

        <ul className="filters">
          <li>
            <a href="#/all" onClick={this.showAll}>
              All
            </a>
          </li>
          <li>
            <a href="#/active" onClick={this.showActive}>
              Active
            </a>
          </li>
          <li>
            <a href="#/completed" onClick={this.showCompleted}>
              Completed
            </a>
          </li>
        </ul>
        <button className="clear-completed" onClick={this.clearCompleted}>
          Clear Completed
        </button>
      </div>
    );
  }
}

export default Footer;
