import { createSlice,PayloadAction } from "@reduxjs/toolkit";

export interface InitialStateTypes{
    isSidebarCollapsed:boolean,
    isdarkMode:boolean
}

const initialState:InitialStateTypes={
    isSidebarCollapsed:false,
    isdarkMode:false,
}

export const globalSlice = createSlice({
    name:'global',
    initialState,
    reducers:{
        setIsSidebarCollapsed:(state,action:PayloadAction<boolean>)=>{
            state.isSidebarCollapsed = action.payload;
        },
        setisdarkMode:(state,action:PayloadAction<boolean>)=>{
            state.isdarkMode = action.payload;
        },
    }
})

export const {setIsSidebarCollapsed,setisdarkMode} = globalSlice.actions;

export default globalSlice.reducer;