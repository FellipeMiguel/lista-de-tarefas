import React, { Component } from "react"

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="main">
        <h1>Lista de Tarefas</h1>

        <form action="#">
          <input type="text" />
          <button type="submit"></button>
        </form>
      </div>
    )
  }
}