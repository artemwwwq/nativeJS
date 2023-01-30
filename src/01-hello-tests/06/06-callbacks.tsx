
import React from "react";



export const User = () => {

const deleteUser = () => {
    alert('user have been deleted')
}

const saveUser = () => {
    alert('have been saved')
}

const onNameChanged = () => {
    console.log('name changed')
}

    const focusLostHandler = () => {
        console.log('FOCUS LOST')
    }

    return <div> <textarea onChange={onNameChanged} onBlur={focusLostHandler}>Artem</textarea>
        <input />
        <button onClick={deleteUser}>delete</button>
        <button onClick={saveUser}>Save</button>
    </div>
}