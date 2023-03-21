import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Product from './Product';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;




const Products = ({cat, filters, sort}) =>{
    
    const [data , setData] = useState([])
    
    useEffect(()=>{
        axios
            .get(
                cat 
                ? `/api/bapz/${cat}`
                : "/api/bapz")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, [cat])
    
    
    

    if(data) {
        // window.scrollTo(0, 0);
        return(
            <Container id='brr' className="row">
                {cat 
                ? data.map((item,index) => { return <Product id={index} item={item} /> })
                : data.slice(0,8).map((item,index) => { return <Product id={index} key={index} item={item} /> } )}
                
            </Container>

        ) 
    }
    else  {
        return(
            <div style="height:1000px" ></div>
        )
    }
    
  }


  export default Products ;