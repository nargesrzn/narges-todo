import React, { Component } from "react";
import { observer } from "mobx-react";
import { action } from "mobx";
@observer
class TodoItem extends Component {
  @action
  onToggle = () => {
    this.props.todo.toggle();
  };
  @action
  destroy = () => {
    this.props.todo.destroy();
  };
  render() {
    const { todo } = this.props;
    return (
      <li className={todo.completed ? "completed" : " "}>
        <div className="view">
          <input
            onChange={this.onToggle}
            type="checkbox"
            className="toggle"
            value="on"
            checked={todo.completed}
          />
          <label>{todo.title}</label>
          <button className="destroy" onClick={this.destroy} />
        </div>
      </li>
    );
  }
}

export default TodoItem;
