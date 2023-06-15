import React from 'react'
import { FaPlus } from 'fa-plus'

import './Form.css'

export default function Form() {
  return (
    <form onSubmit={handleSubmit} action="#" className="form">
      <input value={newTask} onChange={handleChange} type="text" />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  )
}
