// Task Interface
export interface ITask {
    task: string;
    details: string;
    category: string;
}

// Task Context
export type TaskContextState = {
    tasks: ITask[];
    addTask: (name: ITask) => void;
  };
