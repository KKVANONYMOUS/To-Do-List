import React from 'react'

const TodoItem=({text,todos,setTodos,todo})=>{
    const todoDeleteHandler=()=>{
        setTodos(todos.filter(el=>el.id !== todo.id))
    }
    const todoCompletedHandler=()=>{
        setTodos(todos.map(el=>{
            if (el.id === todo.id){
                return {
                    ...el,completed:!el.completed
                }
            }
            return el
        }))
    }
    return (
        <>
        <li className="todo-item">
            <div className={`"todo-name" ${todo.completed ? "completed": ""}`}>{text}</div> 
            <div className="icons">
                <button className="todo-complete" onClick={todoCompletedHandler}><i className="fa fa-check"></i></button>
                <button className="todo-delete" onClick={todoDeleteHandler}><i className="fa fa-trash"></i></button>
            </div>
        </li>
        </>
    )
}

export default TodoItem
