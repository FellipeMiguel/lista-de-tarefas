import React from 'react'

export default function Form() {
  return (
    <form onSubmit={this.handleSubmit} action="#" className="form">
      <input value={newTask} onChange={this.handleChange} type="text" />
      <button type="submit">
        <FaPlus />
      </button>
    </form>
  )
}