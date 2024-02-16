import { createSlice } from "@reduxjs/toolkit";

let counterSlice=createSlice({
    name:"counter",
    initialState:{counter:0},
    reducers:{
        increaseCounter:function(state,action){
            state.counter = state.counter+1;
        },
        
        decreaseCounter:function(state,action){
            state.counter = state.counter-1;
        },

    }
})

export let {increaseCounter,decreaseCounter}=counterSlice.actions

export default counterSlice.reducer