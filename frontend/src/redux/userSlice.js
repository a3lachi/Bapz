import { createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
  name:"user",
  initialState:{
    email:"",
    password:"",
    badAttempt:false,
  },
  reducers:{
    logUser: (state,action) => {
      console.log('HAHWA DKHEL ILOGI ',action.payload)
      state.email = action.payload
      state.badAttempt = false
      window.localStorage.setItem('user', JSON.stringify(state.email));
    },
    badUser: (state,action) => {
      console.log('NOT A USER ')
      state.badAttempt = true
    },
    newUser:(state,action) => {
      state.email = action.payload
      state.badAttempt = false
      window.localStorage.setItem('user', JSON.stringify(state.email));
    },
    updateUser:(state,action) => {
      state.email = JSON.parse(window.localStorage.getItem('user'))
    }
  }
})



export const { logUser , badUser , newUser , updateUser} = userSlice.actions ; 
export default userSlice.reducer ;
















// // Define the initial state of the store
// const initialState = {
//     email: '',
//     password: '',
// };

// export const customerReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'LOG_CUSTOMER':
//         return { ...state, email: action.payload.email };
//       case 'REGISTER_CUSTOMER' :
//         return { ...state, email: action.payload.email };
//       case 'BAD_ACCESS':
//         return state;
//       default:
//         return state;
//     }
// };

// const cartState = {
//     nbCart:0,
//     ids:[3,4,9],
// }
// function insertItem(array, item) {
//   let newArray = array.slice()
//   newArray.push(item)
//   return newArray
// }


// export const cartReducer = (state = cartState, action) => {
//     switch (action.type) {
//       case 'ADD':
//         console.log("HA CHZAD KHONA ",cartState.ids)
//         var brr = [...cartState.ids]
//         brr.push(action.payload)
//         return { ...state, ids:insertItem(state.ids, action.payload) ,  nbCart: state.nbCart + 1};
//       case 'DEL' :
//         if(state.nbCart>0){
//             return { ...state, nbCart: state.nbCart - 1};
//         }
//         else {
//             return state ;
//         }
//       default:
//         return state;
//     }
// };


// export const store = configureStore({reducer:{ customer:customerReducer, cart:cartReducer }} );


