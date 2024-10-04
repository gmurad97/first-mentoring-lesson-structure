import {configureStore} from "@reduxjs/toolkit";
import movieSlices from "./movieSlices/movieSlices";

const store = configureStore({
        reducer:{
            "movie": movieSlices 
        }
});

export default store;