'use client'

import React from "react"
import { Task } from "../page"
import { deleteTask } from "../action"
import Link from "next/link"

export const TaskList = ({ taskList }: { taskList: Task[] }) => {
  return (
    <div>
      {
        taskList && taskList.length > 0 ? (taskList.map(
          (task) =>
            <p
              key={task.id}
            >
              {task.todo}
              <button className="ml-4" onClick={() => deleteTask(task.id)}>
                Delete
              </button>
              <Link href={`/second/${task.id}`}>
                <button>
                  Edit
                </button>
              </Link>

            </p>
        )
        ) :
          <p>There is no task list</p>
      }
    </div>
  )
}