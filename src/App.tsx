import React, { FC } from 'react';
import SearchAppBar from './components/AppBar';
import TaskForm from './components/TaskForm';
import { TaskAppProvider } from "./components/TodoProvider"
import { TodoTask } from './components/TodoTask';




const App: FC = () => {

  return (
    <>
    <SearchAppBar/>
    <TaskAppProvider>
      <TodoTask/>
      <TaskForm/>
    </TaskAppProvider>
    </>
    
  );
}

export default App;
