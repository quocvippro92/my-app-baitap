import {configureStore} from "@reduxjs/toolkit"
import { counterReducer } from "../slice/counterslice"



const rootReducer = {
    counterReducer:counterReducer,

}



export const rootStore = configureStore({
    reducer:rootReducer,
})


