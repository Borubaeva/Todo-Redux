import axios from "axios"


export const  getCoffee=()=>{
    return async(dispatch)=>{
        dispatch (addCoffeePendind)
        try{
            const {data}=await axios('https://api.sampleapis.com/coffee/hot')
            dispatch(addCoffeeSuccess(data))
        }catch(err){
            console.log(err);
            dispatch (addCoffeError(err))
        }
    }
}

const addCoffeePendind=()=>{
    return{
        type: 'ADD_COFFEE_PENDIND'
    }
}

const addCoffeeSuccess=(data)=>({type: 'ADD_COFFEE_SUCCESS', payload:data})
const addCoffeError=(err)=>({type: 'ADD_COFFEE_ERROR', payload:err})