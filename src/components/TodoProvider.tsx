import React, { useState, createContext } from "react"
import { ITask, TaskContextState } from "./Interfaces";

export interface IProviderProps {
    children?: any;
}
const contextDefaultValues: TaskContextState = {
    tasks: [],
    addTask: () => {}
  };
export const TaskAppContext = createContext(contextDefaultValues);

export const TaskAppProvider = (props: IProviderProps) => {
    const [tasks, setTask] = useState<ITask[]>(contextDefaultValues.tasks);
    const addTask = (newTask: ITask) => setTask((tasks) => [...tasks, newTask]);


    return (
        <TaskAppContext.Provider value={{tasks, addTask}}>
            {props.children}
        </TaskAppContext.Provider>
    );
};
