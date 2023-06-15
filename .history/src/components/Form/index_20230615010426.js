import React from 'react'
import PropTypes from 'prop-types'
import { FaPlus } from 'react-icons/fa'

import './Form.css'

export default function Form({ handleChange, handleSubmit, newTask }) {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input value={newTask} onChange={handleChange} type="text" />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  )
}

Form.propTypes = {
  PropTypes
}