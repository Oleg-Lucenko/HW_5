import './components.css';
import { useState } from "react";

const NewTask = (props) => {

    const [taskText, setTaskText] = useState('');


    function submitTask(e) {
        e.preventDefault();
        
        let newTask = {
            id: Math.random(),
            text: taskText,
            taskStatus: false
        };

        props.addTask(newTask, taskText.trim());
        setTaskText('');
    };

    return(
        <form className="new-task-container" onSubmit={submitTask}>     
            <input type="text" className="task-input-text" value={taskText} onChange={(e) => setTaskText(e.target.value)} placeholder="Insert task..."/>
            <input type="submit" className="task-input-submit" value="Add task"/>
        </form>
    )
};

export default NewTask;