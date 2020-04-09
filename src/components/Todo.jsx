import React from 'react'

export default function Todo({todo , toggleTodo}) {
    const handleTodoClick = () =>{
        toggleTodo(todo.id)
    }
    return (
        <div className='center' >
            <label  style={{ display :'flex',alignItems:'center' }}>
            <input style={check} type="checkbox" checked={todo.complete} onChange={handleTodoClick}  />
            <h2>{todo.name}</h2>
            </label>
        </div>
    )
}

const check = {
    marginRight : '20px' , width : '20px',height:'20px'
}