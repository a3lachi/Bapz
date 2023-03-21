


import { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { delCart } from "../redux/cartSlice";
import { store } from '../redux/store'


const Success = () => {

    const dispatch = useDispatch()

    

    const email = useSelector((state)=>state.user.email)
    const [ validpay , setValidpay ] = useState(false)

    useEffect(()=>{setTimeout(() => {
        setValidpay(true)
    }, "4000");}, [])
      

    // if (validpay) {
    //     store.dispatch(delCart())
    // }
    return (
        <>
        {!validpay && <> <div>WAIT WHILE WE PROCEED YOUR PAYMENT...</div>
        <img id='scc' src='https://i.stack.imgur.com/ndqUb.gif' /></>}
        
        { validpay && <><div>CONGRATULATIONS. YOUR ORDER IS CONFIRMED. </div><div>YOU WILL RECEIVE AN INVOICE IN THIS EMAIL : {email} </div></>}
        
        </>
    )
}



export default Success ;