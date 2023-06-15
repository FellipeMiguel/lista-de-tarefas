import React, { Component } from "react"

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "João",
    }
  }

  render() {
    return <h1>Meu component com estado.</h1>
  }
}
