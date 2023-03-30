import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import ProductSmall from './ProductSmall';

const Container = styled.div`
    padding: 20px;
    min-height: 1000px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;




const Products = ({cat, filters, sort}) =>{
    
    const [data , setData] = useState([])

    
        useEffect(()=>{
                axios
                    .post(`/api/bapz/apparel`, {cat:cat})
                    .then((res) => setData(res.data.data))
                    .catch((err) => console.log(err));
        },[cat])
    
    
    
    if(data) {
        return(
            <Container id='brr' className="row">
                {cat 
                ? data.map((item,index) => { return <ProductSmall id={index} item={item} cat={cat}/> })
                : data.map((item,index) => { return <ProductSmall id={index} key={index} item={item} /> } )}
                
            </Container>

        ) 
    }
    else  {
        return(
            <div style={{height:'1000px'}} ></div>
        )
    }
    
  }


  export default Products ;