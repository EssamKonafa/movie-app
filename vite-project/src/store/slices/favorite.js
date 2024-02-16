import { createSlice } from "@reduxjs/toolkit";

let favoriteSlice = createSlice({
    name:"favorite",
    initialState:{
        addfavorite:[],
        isFavorite:false,
        updatedItems:[]

    },
    reducers:{
        changeFavorite: function (state,action){
            state.isFavorite = !state.isFavorite;
        },
        addFavorite: function (state,action){
            
            state.addfavorite.push(action.payload); 
            state.updatedItems=state.addfavorite
        } ,
        setItems: function (state,action){
                state.updatedItems= action.payload; 
                state.addfavorite = action.payload
        } 
    }
})

export let {changeFavorite , addFavorite, setItems} = favoriteSlice.actions

export default favoriteSlice.reducer