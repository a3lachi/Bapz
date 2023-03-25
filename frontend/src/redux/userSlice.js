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
      state.email = action.payload
      state.badAttempt = false
    },
    badUser: (state,action) => {
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
      document.cookie = "jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
    setCommand: (state,action) => { // after fetch  from database
      state.commands = action.payload
    },
    addCommand : (state,action) => { // add to database
      // state.commands = [...state.commands, action.payload]
      // state.commands = action.payload
      
      const camds = action.payload.cmds
      var cemds = ""
      for (let i=0 ; i<camds.length ; i++) {
        cemds += camds[i].color + ',' + camds[i].size + ',' + camds[i].quantity + ',' + camds[i].ids +'@'
      }
      try {
          const date = new Date() ;
          let day = date.getDate();
          let month = date.getMonth() + 1;
          let year = date.getFullYear();
          const dateE = `${day}${month}${year}`
          axios
              .post('/api/customer/commands',{user:state.email ,cmds:cemds})
              .then((res)=> console.log(res.data))
              .catch((err) => console.log('ERR during AXIOS to update commands'))
      } catch (err) {
        console.log('ERR during TRY to update commands') ;
      }
    },
    setJwt : (state,action) => {
      state.jwt = action.payload
      document.cookie = "jwt="+action.payload+";"
    }
  }
})



export const { logUser , badUser , newUser , updateUser , logOutUser , addCommand , setJwt , setCommand} = userSlice.actions ; 
export default userSlice.reducer ;

