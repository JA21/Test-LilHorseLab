import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement:state=>{
            state.value-=1
        },
        incrementByAmount:(state,action)=>{
            state.value+=action.payload
        }
    }
})

export const incrementAsync = (amount:Number) => (dispatch:any) => {
    setTimeout(() => {
      dispatch(incrementByAmount(amount))
    }, 1000)
  }

console.log(counterSlice.actions.increment())
export const selectCount = (state:any) => state.counter.value
export const {increment,decrement,incrementByAmount}=counterSlice.actions;

export default counterSlice.reducer;

