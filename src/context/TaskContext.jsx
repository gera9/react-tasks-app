import { createContext, useState, useEffect } from "react";
import { data } from "../data/data";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  const createTask = (taskTitle, taskDescription) => {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: taskTitle,
        description: taskDescription,
      },
    ]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
