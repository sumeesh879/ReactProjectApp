import React, { Component } from 'react'

class TodoItem extends Component {

  deleteTodo(id) {
    this.props.onDelete(id)
    // console.log(id);
  }

  render() {
    return (
        <li className="Todo">
            <strong>{this.props.todo.id} - {this.props.todo.title}</strong>  <a className="btn btn-xs btn-danger" href="#" onClick={this.deleteTodo.bind(this, this.props.todo.id)}>Delete</a>
        </li>
    );
  }
}

export default TodoItem