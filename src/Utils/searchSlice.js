import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
    name: 'search',
    initialState: {
        // we choose object bcoz the search complexity of O(1) far better than the search complexity of an array O(n)
        // "iphone": ["iphone 11", "iphone 12"]
    },
    reducers:{
        cacheResults: (state,action)=>{
            //where the state arguement represents the current state of the slice and the action arguement represents action being dispatched and the payload in Redux is the data that accompanies an action when it's dispatched
            state = Object.assign(state,action.payload) //Using Object.assign() to update the state with action.payload
            // state = { ...state, ...action.payload };//effectively merges the properties


        }
    }

})
// console.log(searchSlice.getInitialState());

export default searchSlice.reducer;
export const {cacheResults} = searchSlice.actions;