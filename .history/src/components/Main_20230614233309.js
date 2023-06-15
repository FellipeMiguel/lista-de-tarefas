import React, { Component } from 'react'

// Form
import { FaPlus } from 'react-icons/fa'

import './Main.css'

export default class Main extends Component {
  state = {
    newTask: '',
  }

  handleChange = (e) => {
    this.setState({ newTask: e.target.value })
  }

  render() {
    const { newTask } = this.state

    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#" className="form">
          <input value={newTask} onChange={this.handleChange} type="text" />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </div>
    )
  }
}