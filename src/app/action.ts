'use server'

import { revalidateTag } from "next/cache";

export const getTask = async (url: string) => {
  const fetchTask = await fetch(url, {
    next: {
      tags: ['task']
    }
  })
  const res = fetchTask.json();
  return res;
}

export const addTask = async (url: string, data: any) => {
  const fetchTask = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  revalidateTag('task')

  return 'task added';
}


export const deleteTask = async (todoId: number) => {
  const url = `http://127.0.0.1:8000/todo/${todoId}`
  const fetchTask = await fetch(url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    // body: JSON.stringify(data),
  })
  revalidateTag('task')

  return 'task deleted';
}

export const editTask = async (todoId: number, data: any) => {
  const url = `http://127.0.0.1:8000/todo/${todoId}`
  const fetchTask = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  revalidateTag('task')

  return 'task updated';
}

