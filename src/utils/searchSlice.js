import { createSlice } from "@reduxjs/toolkit";


const searchSlice=createSlice({
    name:"search",
    initialState:{
        'afz':['af','asfz']
    },
    reducers:{
        cacheResults:(state,action)=>{
            // {af:['afzl','afzz']}
            console.log(state,action.payload)
            state=Object.assign(state,action.payload)
        }
    }
})

export const {cacheResults}=searchSlice.actions;
export default searchSlice.reducer;