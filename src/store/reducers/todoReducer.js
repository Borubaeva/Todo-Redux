const todoState = {
    todoData:[
        {title:'Read a book', id:1},
        {title:'Watch a movie', id:2}
    ]
};

const todoReducer=(state=todoState, action)=>{
    const {type, payload}= action

    switch (type) {
        case 'addTodo':
            return {
                todoData:[...state.todoData, payload]
            }
            case 'deleteTodo':
             return {
                 todoData: state.todoData.filter(todo => todo.id !== payload)
            };
        default:
            return state
    }
}

export default todoReducer;