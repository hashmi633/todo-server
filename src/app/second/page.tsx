import { getTask } from "../action";
import { InputField } from "./inputField";
import { TaskList } from "./taskList";

export interface Task {
  id: number,
  todo: string,
  is_complete: boolean
}

export default async function Home() {
  const taskList: Task[] = await getTask('http://127.0.0.1:8000/todo/')
  return (
    <main className="">
      <InputField text="Add" />
      <h1>Task List</h1>
      <TaskList taskList={taskList} />
    </main>
  );
}
