import React from 'react';
import styled from "styled-components";


const Container = styled.div`
    border:solid;
    height:300px;
    width:100%
    position:flex;
`
const sliderItems = [{
    id: 1,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "SUMMER SALE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "c5eee8",
},
{
    id: 2,
    img: "https://i.ibb.co/DG69bQ4/2.png",
    title: "AUTUMN COLLECTION",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "f8e0e0",
},
{
    id: 3,
    img: "https://i.ibb.co/cXFnLLV/3.png",
    title: "LOUNGEWEAR LOVE",
    desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
    bg: "cfc6da",
},
];




const Slider = () => {



    return (
        <Container className='row'>Slider</Container>
    )
}




export default Slider ; 