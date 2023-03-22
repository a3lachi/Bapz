import Navbar from '../components/Navbar';
import Categories from '../components/Categories';
import Products from '../components/Products';
import Slider from '../components/Slider';
import Announcement from '../components/Announcement';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

import styled from 'styled-components';
import {logOutUser} from '../redux/userSlice';
import { store }  from '../redux/store';
import { useDispatch} from 'react-redux';

import { useEffect } from 'react';


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

const Profil = (id) => {
    const dispatch = useDispatch()

    return (
        <div className='col'>
            <Announcement />
            <Navbar />

            <Container>

                <Wrapper>
                    EMAIL : {id.id}
                </Wrapper>
                <button onClick={()=>store.dispatch(logOutUser())} >LOG OUT</button>
            </Container>

            <Announcement />
            <Newsletter/>
            <Footer />
        </div>
    )
}


export default Profil ;