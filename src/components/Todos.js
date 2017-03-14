import React, { Component } from 'react'
import TodoItem from './TodoItem'

class Todos extends Component {

  deleteTodo(id) {
    this.props.onDelete(id);
    console.log(id);
  }

  render() {
    let todoItems
    if(this.props.todos) {
      todoItems = this.props.todos.map(todo => {
        return (
          <TodoItem key={todo.title} todo={todo} onDelete={this.deleteTodo.bind(this)} />
        )
      })
    }
    return (
      <div className="Todos">
        <h3>Todo List</h3>
        {todoItems}
      </div>
    );
  }
}

export default Todos