import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count:0,
    color:"red"
}

const counterSlice = createSlice({
    name:"counter",
    initialState:initialState, //khởi tạo state ban đầu 
    reducers:{//khởi tạo reducers là 1 ojb chứa các state con
        increase:(state,action)=>{
            const data=action.payload;
            state.count = state.count + data;// sét lại state
        },
        decrease: (state,action)=>{
            const data = action.payload;

            state.count -= data ;
        }
    }
});


export const {increase,decrease} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;//khai báo reducer