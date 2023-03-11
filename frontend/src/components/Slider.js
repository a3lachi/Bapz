import { width } from '@mui/system';
import React from 'react';
import styled from "styled-components";


const Container = styled.div`
    height:500px;
    margin-top:30px;
    width:100%
    position:flex;
    justify-content: center;

`

const Image = styled.img`
    height: 500px;
    display: flex;
    
`

const Separator = styled.div `
    width:30px;
    display: flex;
`




const Slider = () => {



    return (
        <Container className='row'>
            <Image src='/IMG_8591.jpg'/>
            <Separator />
            <Image src='/IMG_0005.JPG' />
        </Container>
    )
}




export default Slider ; 