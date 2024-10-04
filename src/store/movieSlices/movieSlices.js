import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    "movies": []
}

const movieSlice = createSlice({
    "name": "movie",

    "initialState": initialState,

    "reducers": {
        setMovies: (state, action) => {
            state.movies = action.payload;
        },
        addMovies: (state, action) => {
            state.movies = [...state.movies, ...action.payload]
        }
    }
});

export const {addMovies,setMovies} = movieSlice.actions;
export default movieSlice.reducer;