import React, { Component } from "react";

class TodoInput extends Component {
  render() {
    const { handleChange, handleSubmit, item, editItem } = this.props;
    return (
      <React.Fragment>
        <div className="card card-body my-3">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <div
                  className="input-group-text bg-primary text-white"
                  id="basic-addon1">
                  <i className="fas fa-list-alt"></i>
                </div>
              </div>
              <input
                type="text"
                className="form-control text-capitalize"
                placeholder="Add Todo item"
                aria-label="todo"
                aria-describedby="basic-addon1"
                onChange={handleChange}
                value={item}
              />
            </div>

            <button
              type="submit"
              disabled={item ? false : true}
              value="Add"
              className={`btn btn-block ${
                editItem ? "btn-success" : "btn-primary"
              } text-uppercase`}>
              {editItem ? "Edit Item" : "Add Todo"}
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default TodoInput;
