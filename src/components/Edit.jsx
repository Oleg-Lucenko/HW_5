import React from 'react';
import { useState } from 'react';






const Edit = (props) => {

    const {taskForEdit, tasks, setNewTask} = props;

    const [editedText, setEditedText] = useState(taskForEdit.text);

    function taskEdit (e) {
        e.preventDefault();
        taskForEdit.text = editedText;
        setNewTask(tasks.map(task => ( task.id === taskForEdit.id ? {...task, text : editedText} : {...task} )));
        props.setEditFormStatus(false)
    };


    return (
        <form className='edit-form' onSubmit={taskEdit}>
            <input type='text' className='edit-text-input' value={editedText} onChange={(e) => setEditedText(e.target.value)} />
            <input type='submit' value='Save' className='save-submit'/>
        </form>
    );
};

export default Edit;