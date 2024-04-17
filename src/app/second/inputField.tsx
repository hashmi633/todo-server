'use client'

import React, { useState } from "react"
import { addTask, editTask } from "../action";

export const InputField = ({ text, id }: { text: string, id?: number }) => {
  const [task, setTask] = useState('');
  return (
    <div className="flex gap-4 p-4">
      <input
        placeholder="add task here"
        type="text"
        value={task}
        required
        className="border bottom-1 p-2"
        onChange={(e) => setTask(e.target.value)}
      />
      {task && text == "Add" && ( // this will be used in root folder
        <button
          onClick={() => {
            addTask('http://127.0.0.1:8000/todo', { todo: task });
            setTask('');
          }}
        >
          {text}
        </button>
      )
      }
      {task && text == "Update" && id !== undefined && ( // this will be used in [id] route.
        <button
          onClick={() => {
            editTask(id, { todo: task });
            setTask('');
          }}
        >
          {text}
        </button>
      )
      }
    </div>
  )
}