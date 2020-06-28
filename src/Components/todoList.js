import React, { Component } from "react";
import TodoItem from "./todoItem";

class TodoList extends Component {
  render() {
    //console.log(this.props)
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">Todo List</h3>
        {items.map((item) => (
          <TodoItem
            key={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        ))}
        <button
          className="btn btn-danger btn-block text-uppercase mt-5"
          onClick={clearList}
          type="button">
          Clear List
        </button>
      </ul>
    );
  }
}

export default TodoList;
