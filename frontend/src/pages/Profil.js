import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Slider from '../components/Slider';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import Commands from '../components/Commands';
import Account from '../components/Account';

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
    height: 100%;
    margin-right: auto;
    margin-left: auto;
    align-items: center;
    padding : 20px 20px 20px 20px ;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

`

const Wrapper = styled.div`

`
const Containerr = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
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
    

    const [seecmds , setSeecmds ] = useState(false)

    const [ seeaccnt ,  setSeeaccnt ] = useState(false)

    

    return (
        <Containerr className='col'>
            <Announcement />
            <Navbar />

            <Container>

                <Wrapper>
                    { seecmds || seeaccnt
                        ? seecmds && <Commands snd={setSeecmds} /> || seeaccnt && <Account snd={setSeeaccnt} />
                        : <>
                            <button onClick={()=>setSeeaccnt(true)}>ACCOUNT</button>
                            <button onClick={()=>setSeecmds(true)}>COMMANDS</button>
                            
                        </>
                    }
                    
                </Wrapper>
                    { seecmds ? <></> : <button onClick={()=>store.dispatch(setJwt("jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"))} >LOG OUT</button> }
            </Container>

            
            <Footer />
        </Containerr>
    )
}


export default Profil ;