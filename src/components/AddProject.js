import React, { Component } from 'react'
import uuid from 'uuid'

class AddProject extends Component {

    constructor() {
        super();
        this.state = {
            newProject: {}
        }
    }

    static defaultProps = {
        categories: ['Web', 'Mobile', 'Design']
    }
    
    handleSubmit(e) {
        if(this.refs.title.value === '') {
            alert('Title is Required!!')
        } else {
            this.setState({
                newProject: {
                    id: uuid.v4(),
                    title: this.refs.title.value,
                    category: this.refs.category.value
                }
            }, function() {
                console.log(this.state)
                this.props.addProject(this.state.newProject)
            });
        }
        e.preventDefault()
    }

    render() {
        let categoryOptions = this.props.categories.map(category => {
            return (
                <option key={category} value={category}>{category}</option>
            )
        })
        return (
            <div>
                <h1>Add Project</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input type="text" className="form-control" ref="title" />
                    </div>
                    <div className="form-group">
                        <label>Category:</label>
                        <select ref="category" className="form-control">
                            {categoryOptions}
                        </select>
                    </div>
                    <input type="submit" value="submit" className="btn btn-primary"/>
                </form>
            </div>
        );
    }
}

export default AddProject