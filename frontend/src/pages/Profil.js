import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Slider from '../components/Slider';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

import styled from 'styled-components';
import {setJwt , logUser , setCommand}  from '../redux/userSlice';
import { store }  from '../redux/store';
import { useDispatch , useSelector} from 'react-redux';
import axios from 'axios';
import { useEffect, useState } from 'react';


const Container = styled.div`
    margin-top : 60px;
    margin-bottom:60px;
    width: 70vw;
    height: 30vh;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    padding : 20px 20px 20px 20px ;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

`

const Wrapper = styled.div`

`

const handleRes = (data,dispatch,setCmds,setEmail) => {
    if (data.user == "yes") {
        store.dispatch(logUser(data.email))
        store.dispatch(setCommand(data.commands))
        setCmds(data.commands)
        setEmail(data.email)
    }
}

const Profil = () => {
    const dispatch = useDispatch()
    const jwwt = useSelector((state) =>  state.user.jwt)

    const [ cmds , setCmds ] = useState([])
    const [ email , setEmail ] = useState("")

    const [seecmds , setSeecmds ] = useState(false)

    axios
        .post('/api/customer/token',{jwt:jwwt})
        .then((res)=> handleRes(res.data,dispatch,setCmds,setEmail))
        .catch((err) => console.log("Error during fetching customer profil data.") )

    return (
        <div className='col'>
            <Announcement />
            <Navbar />

            <Container>

                <Wrapper>
                    { seecmds ? <Commands /> : 
                        <div>EMAIL : {email}</div>
                        <button onClick={()=>setSeecmds(true)}>COMMANDS</button>
                    }
                    
                </Wrapper>
                <button onClick={()=>store.dispatch(setJwt("jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"))} >LOG OUT</button>
            </Container>

            <Announcement />
            <Newsletter/>
            <Footer />
        </div>
    )
}


export default Profil ;