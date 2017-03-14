import React, { Component } from 'react';
import uuid from 'uuid';
import $ from 'jquery';
import Projects from './components/Projects';
import AddProject from './components/AddProject';
import Todos from './components/Todos';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  getTodos() {
    $.ajax({
      url: 'https://jsonplaceholder.typicode.com/todos',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          todos: data
        }, () => {
         console.log(this.state);
        })
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    }
    );
  }

  getProjects() {
    this.setState({projects: [
        {
          id: uuid.v4(),
          title: 'Angular 2 Chat',
          category: 'Web'
        },
        {
          id: uuid.v4(),
          title: 'Weather Application',
          category: 'Mobile'
        },
        {
          id: uuid.v4(),
          title: 'ReactJS Chat',
          category: 'Web'
        }
    ]});
  }

  componentWillMount() {
    this.getProjects();
    this.getTodos();
  }

  componentDidMount() {
    this.getTodos();
  }

  handleAddProject(project) {
    let newProjects = this.state.projects
    newProjects.push(project);
    this.setState({
      projects: newProjects
    })
  }

  handleDeleteProject(id) {
    let projects = this.state.projects
    let index = projects.findIndex(x => x.id === id)
    projects.splice(index, 1);
    console.log(index);
    this.setState({
      projects: projects
    })
  }

  handleDeleteTodo(id) {
    let todos = this.state.todos
    let index = todos.findIndex(x => x.id === id)
    todos.splice(index, 1);
    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div className="container">
        <AddProject addProject={this.handleAddProject.bind(this)}/><hr/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)} />
        <hr/>
        <Todos todos={this.state.todos} onDelete={this.handleDeleteTodo.bind(this)} />
      </div>
    );
  }
}

export default App;
