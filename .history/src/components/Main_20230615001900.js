import React, { Component } from 'react'

// Form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa'

import './Main.css'

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { tasks } = this.state
    let { newTask } = this.state
    newTask = newTask.trim()

    if (tasks.indexOf(newTask) !== -1) {
      return
    }

    const newsTasks = [...tasks]

    this.setState({ tasks: [...newsTasks, newTask], newTask: '' })
  }

  handleChange = (e) => {
    this.setState({ newTask: e.target.value })
  }

  // Edit
  handleEdit = (e, index) => {
    const { tasks } = this.state

    this.setState({
      index,
      newTask: tasks[index],
    })
  }

  // Delete
  handleDelete = (e, index) => {
    const { tasks } = this.state
    const newsTasks = [...tasks]
    newsTasks.splice(index, 1)

    this.setState({ tasks: [...newsTasks] })
  }

  render() {
    const { newTask, tasks } = this.state

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input value={newTask} onChange={this.handleChange} type="text" />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tasks">
          {tasks.map((task, index) => (
            <li key={task}>
              {task}
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"
                />

                <FaWindowClose
                  onClick={(e) => this.handleDelete(e, index)}
                  className="delete"
                />
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
