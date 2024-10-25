import toast from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    totalItem: localStorage.getItem("totalItems") ? JSON.parse(localStorage.getItem("totalItems")) : 0,
};

const cartSlice = createSlice({
    name:"cart",
    initialState:initialState,
    reducers:{
        setTotalItems(state,value){
            state.token = value.payload;
        },
        //add items
        //remove items
        //resert cart
    }
})

export const {setTotalItems} = cartSlice.actions;
export default cartSlice.reducer;