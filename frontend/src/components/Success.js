


import { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { delCart } from "../redux/cartSlice";
import { addCommand } from '../redux/userSlice'
import { store } from '../redux/store'
import styled from "styled-components";



const Container = styled.div`
    padding : 20px 20px 20px 20px;
    height:65vh;
    text-align: center;

`


const Wrapper = styled.div`
    margin-top:50px;
    
    display: inline-block;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

`

const Info = styled.div`
    padding: 20px 20px 20px 20px ;
    
`

const Success = () => {

    const dispatch = useDispatch()

    

    const email = useSelector((state)=>state.user.email)
    const cart = useSelector((state)=>state.cart.itms)

    const [ validpay , setValidpay ] = useState(false)

    useEffect(()=>{setTimeout(() => {
        setValidpay(true)
    }, "1000");}, [])
      

    // if (validpay) {
    //     store.dispatch(delCart())
    // }
    useEffect(()=>{
        validpay && store.dispatch(addCommand( { user:email , cmds:cart } ))
        validpay && store.dispatch(delCart())
    },[validpay])
    
    
    return (
        <>
        <Container>
            <Wrapper >
                <Info >
        {!validpay && <> <div>WAIT WHILE WE PROCEED YOUR PAYMENT...</div>
        <img id='scc' src='https://i.stack.imgur.com/ndqUb.gif'  /></>}
        
        { validpay && <><div>CONGRATULATIONS. YOUR ORDER IS CONFIRMED. </div><div>YOU WILL RECEIVE AN INVOICE IN THIS EMAIL : <b> {email} </b></div></>}
        </Info>
        </Wrapper>
        </Container>
        </>
    )
}



export default Success ;