import React, { useState } from 'react'

const ReactCounter = () => {
    const [counter, setCounter]= useState(22)
    const plus=()=>{
        setCounter(counter+1)
    }
    const minus=()=>{
        if(counter>0){          
        setCounter(counter-1)
        }
    }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={plus}>+</button>
        <button onClick={()=>setCounter(counter-1)}>-</button>
    </div>
  )
}

export default ReactCounter