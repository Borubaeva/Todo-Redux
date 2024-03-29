import React from 'react';
import {  useDispatch, useSelector } from 'react-redux';

const TodoRedux = () => {
    const todoData = useSelector((state) => state.todos.todoData)
    const dispatch=useDispatch()

    const addNewTodo=(e)=>{
        e.preventDefault();
        const todoTitle=e.target.aty.value.trim()

        if(todoTitle.length>0){
            // const newTodo={title:todoTitle, id:todoData.at(-1).id+1||1}
            const newTodo = {title: todoTitle, id: todoData.at(-1)?.id + 1 || 1}
            dispatch({type:"addTodo", payload:newTodo})
        }
    }

    const deleteTodo = (id) => {
        dispatch({type: "deleteTodo", payload: id});
    }

    return (
        <div onSubmit={addNewTodo}>
            <form>
                <input type="text" name='aty' />
                <input type="submit" />
            </form>
            <ul>
                {todoData.map((el)=>(
                    <li key={el.id}>{el.title}
                    <button type="button" class="btn btn-outline-danger" 
                    onClick={() => deleteTodo(el.id)}><i class="bi bi-trash3"></i></button>
                    </li>
                    
                ))}
            </ul>
        </div>
    );
}

export default TodoRedux;