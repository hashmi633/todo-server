'use client'
import { deleteTask, editTask, getTask } from "@/app/action";
import { Button } from "../ui/button";
import React, { useState } from "react";
import { Task } from "@/app/page";
import Link from "next/link";


export const GetTaskList = ({ taskList }: { taskList: Task[] }) => {


  return (
    <div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {taskList && taskList.map((task) => (
          <li className="py-4 flex justify-between items-center">
            <span className="text-gray-800 dark:text-gray-100" key={task.id}>
              {task.todo}
            </span>
            <div className="flex space-x-2">

              <Button size="icon" variant="ghost">
                <CheckIcon className="h-5 w-5 text-green-500" />
              </Button>

              <Link href={`/second/${task.id}`}>
                <Button size="icon" variant="ghost">
                  <EditIcon className="h-5 w-5 text-yellow-500" />
                </Button>
              </Link>

              <Button size="icon" variant="ghost" onClick={() => (deleteTask(task.id))}>
                <TrashIcon className="h-5 w-5 text-red-500" />
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
function CheckIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}


function TrashIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}


function EditIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7v6h6" />
      <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
    </svg>
  )
}
