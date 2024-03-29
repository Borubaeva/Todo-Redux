import React from 'react'
import ReactCounter from './ReactCounter'
import ReduxCounter from './ReduxCounter'
import TodoReact from './TodoReact'
import TodoRedux from './TodoRedux'

const App = () => {
  return (
    <div>
      React
      <ReactCounter/>
      <hr />
      Redux
      <ReduxCounter/>
      <hr />
      Todo React
      <TodoReact/>
      <hr />
      Todo Redux 
      <TodoRedux/>
    </div>
  )
}

export default App


