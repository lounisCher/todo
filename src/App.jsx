import { useEffect, useState } from 'react'
import './App.css'
import Nav from './composant/nav'
import TaskCol from './composant/taskCol';
import Todo from "./assets/direct-hit.png"
import Doing from "./assets/fire.png";
import Done from "./assets/check-mark-button.png";

const oldTasks = localStorage.getItem("tasks");

function App() {
  const [taskData, setTaskData] = useState(JSON.parse(oldTasks) || null);
  const handleDelete=(taskIndex)=>{
    const newTasks = taskData.filter((task, index)=>index !== taskIndex);
    setTaskData(newTasks);
  };
  const editTask = (index, newTitle) => {
    const updatedTasks = taskData.map((task, i) =>
        i === index ? { ...task, task: newTitle } : task
    );
    setTaskData(updatedTasks);
};

  
  useEffect(()=>{
      localStorage.setItem("tasks", JSON.stringify(taskData))
  });

 

  return (
    <div>
      <Nav setTaskData={setTaskData}/>
      <div className='flex items-center justify-center gap-4 max-md:flex-col'>
      <TaskCol name="ToDo" img={Todo} tasks={taskData} handleDelete={handleDelete} 
      status="To do" editTask={editTask}
      />
      <TaskCol name="Doing" img={Doing} tasks={taskData} status="doing" handleDelete={handleDelete}  editTask={editTask}/>
      <TaskCol name="Done" img={Done} tasks={taskData} status="done" handleDelete={handleDelete} editTask={editTask}/>
      </div>
      
    </div>
  )
}

export default App
