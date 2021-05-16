import React from 'react'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

function TodoList() {
    let todos = useSelector(state=>state);
    
    return (
        <div className="my-4">
            {todos.map((todo)=>   {
                return <TodoItem id={todo.id} todo={todo} isDone={todo.isDone}/>;
            })}
        </div>
    )
}

export default TodoList