const counterState={
    counter:11
}

const counterReducer=(state=counterState, action)=>{
  
        switch (action.type) {
            case 'plus':
                return {counter:state.counter+1}
            case 'minus':
                return {counter:state.counter-1}    
            default:
                return state
        }
    }


export default counterReducer