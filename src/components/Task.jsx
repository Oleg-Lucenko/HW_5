import React from 'react';




const Task = (props) => {


    return (
        <div className="task-container" >
            <a href="#" onClick={(e) => {e.preventDefault(); props.taskStatus(props.task.id)}} className={props.task.taskStatus ? "task-link active" : "task-link"}>
                <input type="checkbox" className="input-checkbox" checked={props.task.taskStatus ? "checked" : ""} readOnly={true} />
                <span className="task-number">{props.number}.</span>
                <p className="task-text">{props.text}</p>
            </a>
            <button onClick={() => props.taskForEditPrepare(props.task.id)} className='edit-button'>Edit</button>
            <button className="delete-btn" onClick={() => props.removeTask(props.task.id)}><img src={require('../images/trash.png')} className="task-trash-img"/></button>
        </div>
    );
};

export default Task;