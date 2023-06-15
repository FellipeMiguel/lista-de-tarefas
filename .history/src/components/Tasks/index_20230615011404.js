import React from 'react'

export default function Tasks() {
  return (
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
  )
}