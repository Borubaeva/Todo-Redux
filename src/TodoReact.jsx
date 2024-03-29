import React, { useState } from 'react'

const TodoReact = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (e) => {
    e.preventDefault();
    let todoTitle = e.target.title.value.trim();
    if (todoTitle.length > 0) {
      let newDataInp = { title: todoTitle, id: Math.random() };
      setTodos([...todos, newDataInp]);
      e.target.reset();
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <form onSubmit={addTodo}>
        <input type="text" name='title' />
        <input type="submit" />
      </form>
      <ul>
          {todos.map((el) => (
            <li key={el.id}>{el.title}
              <button type="button" class="btn btn-outline-danger" 
              onClick={() => deleteTodo(el.id)}><i class="bi bi-trash3"></i></button>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default TodoReact
