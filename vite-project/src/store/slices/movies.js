import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const moviesAction = createAsyncThunk('movies/getAll', async (page) => {

    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular/?api_key=55e2b473c23bed549a6f0f3b59a9429f&page=${page}`)
    return res.data.results
})

const moviesSlice = createSlice({
    name: 'movies',
    initialState: { movies: [] },
    extraReducers: (builder) => {
        builder.addCase(moviesAction.fulfilled, (state, action) => {
            state.movies = action.payload
        })
    }
})

export default moviesSlice.reducer
