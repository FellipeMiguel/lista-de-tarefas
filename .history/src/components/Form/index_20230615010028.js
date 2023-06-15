import React from 'react'
import { FaPlus } from 'fa-plus'

import './Form.css'

export default function Form(props) {
  return (
    <form onSubmit={props.handleSubmit} action="#" className="form">
      <input value={props.newTask} onChange={props.handleChange} type="text" />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  )
}
