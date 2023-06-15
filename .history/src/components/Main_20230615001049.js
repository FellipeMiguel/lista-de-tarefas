import React, { Component } from 'react'

// Form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa'

import './Main.css'

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
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

    this.setState({ tasks: [...newsTasks, newTask] })
  }

  handleChange = (e) => {
    this.setState({ newTask: e.target.value })
  }

  handleEdit = (e, index) => {
    console.log('Edit', index)
  }

  handleDelete = (e, index) => {
    console.log('Delete', index)
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
          {tasks.map((task) => (
            <li key={task}>
              {task}
              <span>
                <FaEdit
                  onClick={(e) => this.handleEdit(e, index)}
                  className="edit"
                />

                <FaWindowClose onClick={this.handleDelete} className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
