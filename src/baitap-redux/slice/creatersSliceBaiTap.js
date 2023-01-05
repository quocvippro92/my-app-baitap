import { createSlice } from "@reduxjs/toolkit";





const initialState = {
    list:["Tăng Ca 1 ngay","Được nghỉ tết ngày 13/1"],
}
   
const InputSlice = createSlice({
    name:"counter",  
    initialState:initialState, //khởi tạo state ban đầu 
    reducers:{//khởi tạo reducers là 1 ojb chứa các state con
        addItem:(state,action)=>{
            const data=action.payload;
            if(data === ''){
                alert("không được để trống")
            }else state.list = [data, ...state.list];
            
        },
        deleteItem:(state,action)=>{
            const newList = [...state.list]
            newList.splice(action.payload,1);
            state.list = newList
        }
    }
});

export const {addItem,deleteItem} = InputSlice.actions;
export const InputReducer = InputSlice.reducer;