import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const userSlice = createSlice({
  name:"user",
  initialState:{
    email:"",
    password:"",
    badAttempt:false,
    jwt:"",
    commands:[],
  },
  reducers:{
    logUser: (state,action) => {
      console.log('HAHWA DKHEL ILOGI ',action.payload)
      state.email = action.payload
      state.badAttempt = false
    },
    badUser: (state,action) => {
      console.log('NOT A USER ')
      state.badAttempt = true
    },
    newUser:(state,action) => {
      state.email = action.payload
      state.badAttempt = false
      // window.localStorage.setItem('user', JSON.stringify(state.email));
    },
    updateUser:(state,action) => {
      // state.email = JSON.parse(window.localStorage.getItem('user'))
    },
    logOutUser:(state,action) => {
      state.email=" "
      state.password=""
      console.log('mal rbo')
      document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
    setCommand: (state,action) => { // after fetch  from database
      state.commands = action.payload
    },
    addCommand : (state,action) => { // add to database
      // state.commands = [...state.commands, action.payload]
      // state.commands = action.payload
      
      const camds = action.payload.cmds
      console.log('ha chosel',camds[0])
      var cemds = ""
      for (let i=0 ; i<camds.length ; i++) {
        cemds += camds[i].color + ',' + camds[i].size + ',' + camds[i].quantity + ',' + camds[i].ids +'@'
      }
      console.log('WILL UPDATE COMMANDS ',cemds)
      try {
          axios
              .post('/api/customer/commands',{user:state.email ,cmds:cemds})
              .then((res)=> console.log(res.data))
              .catch((err) => console.log('ERR during AXIOS to update commands'))
      } catch (err) {
        console.log('ERR during TRY to update commands') ;
      }
    },
    setJwt : (state,action) => {
      // console.log('WHAT TO SET JWT TO : ',action.payload)
      state.jwt = action.payload
      document.cookie = "jwt="+action.payload+";"
    }
  }
})



export const { logUser , badUser , newUser , updateUser , logOutUser , addCommand , setJwt , setCommand} = userSlice.actions ; 
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


