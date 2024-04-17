'use client'
import { addTask, editTask } from "@/app/action";
import { useState } from "react"

export const InputField = ({ text, id }: { text: string, id?: number }) => {
  const [task, setTask] = useState("");
  return (
    <div className="mb-4 flex items-center">
      <input
        className="flex-grow p-3 border border-gray-200 rounded-md shadow-sm dark:border-gray-800"
        placeholder="Add a new task"
        type="text"
        required
        value={task}
        onChange={(e) => setTask(e.target.value)} />
      {
        task && text == "Add" && <button
          className="ml-4 w-1/6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-md shadow-md"
          type="submit"
          onClick={() => {
            addTask('http://127.0.0.1:8000/todo', { todo: task });
            setTask('');
          }}

        >
          {text}
        </button>
      }
      {
        task && text == "Update" && id !== undefined && <button
          className="ml-4 w-1/6 bg-blue-500 hover:bg-blue-600 text-white py-2 px-3 rounded-md shadow-md"
          type="submit"
          onClick={() => {
            editTask(id, { todo: task });
            setTask('');
          }}
        >
          {text}
        </button>
      }
    </div>
  )
}