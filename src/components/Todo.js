import React from 'react'
import '../App.css'
import TodoItem from './TodoItem'


const Todo=({todos,setTodos,filteredTodo})=>{
        return (
            <>
                <div className="todo-box">
                    <ul className="todo-list">
                        {filteredTodo.map(todo=>(
                            <TodoItem key={todo.id} text={todo.text} todos={todos} setTodos={setTodos} todo={todo} />
                        ))}
                     </ul>
                </div>
            </>
        )
    
}

export default Todo
