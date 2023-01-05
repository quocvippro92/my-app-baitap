import { configureStore } from "@reduxjs/toolkit"
import { InputReducer } from "../slice/creatersSliceBaiTap"

const rootReducer = {
    InputReducer:InputReducer,
}



export const rootStored = configureStore({
    reducer:rootReducer,
})
