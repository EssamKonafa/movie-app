import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/counter";
import favoriteSlice from "./slices/favorite";
import moviesSlice from "./slices/movies";



export let store = configureStore({
  reducer:{
    counter: counterSlice,
    favorite: favoriteSlice,
    movies: moviesSlice
  }  
})