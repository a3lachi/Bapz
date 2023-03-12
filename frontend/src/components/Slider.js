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
    transition: all .3s ease-in-out;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    :hover{
        transform: scale(1.03)
    }
    
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