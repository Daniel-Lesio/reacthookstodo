import React from 'react'
import Todo from './Todo'

export default function TodoList({todos,toggleTodo}) {
    return (
        <div>
            {todos.map(todo=>(
                <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
            ))}
        </div>
    )
}
