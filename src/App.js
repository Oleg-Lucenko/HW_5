import {useState} from 'react';
import NewTask from './components/New-task';
import Tasks from './components/Tasks';
import Edit from './components/Edit';
import './App.css';




function App() {
  const [tasks, setNewTask] = useState([]);
  const [taskForEdit, setTaskForEdit] = useState({});
  const [editFormStatus, setEditFormStatus] = useState(false);

  function addTask(newItem, inputValue) {
    if (inputValue) {
    setNewTask([...tasks, newItem]);
    };
  };

  function removeTask(taskID) {
    setNewTask(tasks.filter(task => task.id != taskID));
  };

  function taskStatus(taskID) {
    setNewTask(tasks.map(task => task.id === taskID ? { ...task, taskStatus: !task.taskStatus } : {...task} ));
  };

  function taskForEditPrepare(taskID) {
    setEditFormStatus(true);
    const [taskForEdit] = tasks.filter(task => task.id === taskID);
    setTaskForEdit(taskForEdit);
  };

  return (
    <div className="App">
      {editFormStatus && (
      <Edit taskForEditPrepare={taskForEditPrepare} taskForEdit={taskForEdit} tasks={tasks} setNewTask={setNewTask} setEditFormStatus={setEditFormStatus}/>
      )}
        <NewTask tasks={tasks} addTask={addTask}/>
        <Tasks tasks={tasks} removeTask={removeTask} taskStatus={taskStatus} taskForEditPrepare={taskForEditPrepare}/>
    </div>
  );
}

export default App;
