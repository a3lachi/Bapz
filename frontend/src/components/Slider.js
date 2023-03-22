import { width } from '@mui/system';
import React from 'react';
import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
    padding-top:30px;
    width:100%;
    height:100%;
    position:flex;
    margin:auto ;
    ${mobile({ paddingTop:"5px"})}
`
const Wrapper = styled.div`

    
    transition: all .3s ease-in-out;
    :hover{
        transform: scale(1.03)
    }
    ${mobile({  marginBottom:"20px" })}
`
const Image = styled.img`
    height: 500px;
    display: flex;
    transition: all .3s ease-in-out;
    :hover{
        transform: scale(1.03)
    }
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    max-width:100%;
    max-height:100%;
    ${mobile({ height:"100%"  })}
    
`

const Separator = styled.div `
    width:30px;
    display: flex;
`




const Slider = () => {



    return (
        <Container className='row'>
            <Wrapper>
                <Image style={{width:'100vw',height:'100%'}} src='/images/20230316_BAPEX_M1-PC.jpg' />
            </Wrapper>
            <Wrapper>
                <Image style={{width:'100vw',height:'100%'}} src='/images/20230316_ROADSTA_S1-PC.jpg' />
            </Wrapper>
            <Wrapper>
                <Image style={{width:'100vw',height:'100%'}} src='/images/20230310_S1PC.jpg' />
            </Wrapper>
            <Wrapper>
                <Image src='/IMG_8591.jpg'/>
            </Wrapper>
            <Separator />
            <Wrapper>
                <Image src='/IMG_0005.JPG' />
            </Wrapper>
            <Separator />
            
        </Container>
    )
}




export default Slider ; 