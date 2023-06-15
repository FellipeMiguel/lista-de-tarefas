import React, { Component } from 'react'

import { FaEdit, FaWindowClose } from 'react-icons/fa'

import 

import './Main.css'

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [],
    index: -1,
  }

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'))

    if (!tasks) {
      return
    }

    this.setState({ tasks })
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state
    if (tasks === prevState.tasks) {
      return
    }

    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { tasks, index } = this.state
    let { newTask } = this.state
    newTask = newTask.trim()

    if (tasks.indexOf(newTask) !== -1) {
      return
    }

    const newsTasks = [...tasks]

    if (index === -1) {
      this.setState({ tasks: [...newsTasks, newTask], newTask: '' })
    } else {
      newsTasks[index] = newTask
      this.setState({ tasks: newsTasks, index: -1, newTask: '' })
    }
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
