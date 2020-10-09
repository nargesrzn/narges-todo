import React, { Component } from "react";
import { observer } from "mobx-react";
import "./App.css";
import TodoEntry from "./components/TodoEntry";
import TodoItems from "./components/TodoItems";
import Footer from "./components/Footer";
import todoStore from "./stores/TodoStore";

@observer
class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <TodoEntry />
        <TodoItems viewStore={todoStore.views} todos={todoStore.todos} />
        <Footer />
      </div>
    );
  }
}

export default App;
