import {combineReducers, createStore} from 'redux'
import counterReduser from './reducers/counterReducer'
import todoReducer from './reducers/todoReducer'

const  root=combineReducers({
    counter:counterReduser,
    todos:todoReducer
})
const store=createStore(root)

export default store