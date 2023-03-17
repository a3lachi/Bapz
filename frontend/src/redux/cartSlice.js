import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name:"cart",
    initialState:{
      itms:[],
    },
    reducers:{
      addOne: (state , action) => {
        state.itms = [...state.itms, Number(action.payload)];
        console.log('HAHAWA  ',state.itms)
        
      }
    }
  })
  
  
  
  export const { addOne } = cartSlice.actions ;
  export default cartSlice.reducer ;