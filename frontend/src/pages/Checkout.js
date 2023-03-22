import { useState } from 'react';
import { TextField , Input , Button} from '@mui/material';
import Divider from '@mui/material/Divider';
import { useSelector } from "react-redux";
import styled from 'styled-components'
import Success from '../components/Success'
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import { mobile , tablet } from '../responsive';



const Container = styled.div`
    position: relative;
    margin-top:50px;
    margin-bottom:50px;
    width:100%;
    align-items: center;
    display:flex;
    

    flex-direction:column;
`
const Wrapper = styled.div`
    padding: 20px 20px 20px 20px;
    position: relative;
    width:400px;
    align-items: center;
    display:flex;
    flex-direction:column;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    ${mobile({ width: "95%" })}
    ${tablet({ width: "70%" })}
`
// const Container = styled.div`
//     width:20vw;
//     box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
//     padding : 10px 10px 10px 10px;
//     margin-bottom:20px;
// `

const Ellem = styled.div`
`

const Infos = styled.div`

` 
const Mag = styled.img`
    width:70px;
`

const Proced = styled.div`
    align-items: center;
    width:300px;
    position:relative;
    padding : 10px 10px 10px 10px;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`



const Checkout = (products) => {

    // products = products.prods

    const [ pay , setPay ] = useState(false)
    
    const ccCheck = (event) => {
        var texte = event.target.value
        const tol = texte.length
        var tt = ""
        for (let i=0 ; i<tol ; i++) {
            if (texte[i]!= " ") {
                tt+=texte[i]
            }
        }

        var tex = tt[0]
        const pol = tt.length
        if (tol>1) {
            for (let i=1 ; i<pol ;i++) {
                if ((i+1)%4==0) {
                    tex+=tt[i]+" "
                }
                else {
                    tex+=tt[i]
                }
            }
            event.target.value = tex.slice(0,19)
        }
    }

    const edCheck = (event) => {
        var texte = event.target.value
        const tol = texte.length 
        var tt = ""
        for (let i=0 ; i<tol ; i++) {
            if (texte[i]!= "/") {
                tt+=texte[i]
            }
        }
        var tex = tt[0]
        const pol = tt.length
        if (tol>1) {
            for (let i=1 ; i<pol ;i++) {
                if ((i+1)%2==0) {
                    tex+=tt[i]+"/"
                }
                else {
                    tex+=tt[i]
                }
            }
            event.target.value = tex.slice(0,5)
        }
    }

    const cvvCheck = (event) => {
        var texte = event.target.value
        event.target.value = texte.slice(0,3)
    }
    
    const user = useSelector((state)=>state.user)
    products = products.prods
    
    if (products.length>0) {
        if (user.email) {

            console.log('checkout ',user.email)

            if (!pay) {
                return (
                    <>
                    <Navbar />
                    
                    <Container>
                    <Wrapper>
                    <div style={{marginBottom:'20px'}}><b>MY ORDER</b></div>
                    { products.map((elem,indx)=>(
                        <Ellem><b>{elem.productname}</b> <Infos> <Mag src={elem.src[0]+'.jpg'} /> {elem.color} - {elem.size} - {elem.price} x{elem.quantity}</Infos><Divider style={{marginBottom:'30px'}} /></Ellem>
                    ))}
                    
                    
                    <Proced >
                    <div><Input onChange={(e)=>ccCheck(e)} id={"cc"} placeholder="Credit Card" style={{width:'220px'}} /></div>
                    <div><Input onChange={(e)=>edCheck(e)} id={"cvv"} placeholder="Expiry Date" style={{width:'100px' , marginRight:'76px'}} /><span style={{width:'30px'}}></span> <Input onChange={(e)=>cvvCheck(e)} id={"cvv"} placeholder="CVV" style={{width:'40px'}} /></div>
                    <ul><button onClick={(e)=> setPay(true)}>PAY</button></ul>
                    </Proced>
                    </Wrapper>
                    </Container>
                    <Footer />
                    </>
                )
            }
            else {
                return(
                    <>
                    <Navbar />
                    <Success />
                    <Footer />
                    </>
                )
            }
        }
        else {
            return(
                <div>You have to register or login.</div>
            )
        }
    }
    else {
        return <></>
    }

}









export default Checkout ; 