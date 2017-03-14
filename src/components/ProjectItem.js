import React, { Component } from 'react'

class ProjectItem extends Component {

  deleteProject(id) {
    this.props.onDelete(id)
    // console.log(id);
  }

  render() {
    return (
        <li className="Project">
            <strong>{this.props.project.title} - {this.props.project.category}</strong>  <a className="btn btn-xs btn-danger" href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>Delete</a>
        </li>
    );
  }
}

export default ProjectItem