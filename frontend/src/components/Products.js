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
    const [fetched , setFetched ] = useState([])
    
    useEffect(()=>{
        axios
            .get(
                cat 
                ? `/api/bapz/${cat}`
                : "/api/bapz")
            .then((res) => setData(res.data))
            .then(setFetched(1))
            .catch((err) => console.log(err));
    }, [fetched])
    
    if(data) {
        return(
            <Container className="row" >
                {data.slice(0,8).map((item,index) => { return <Product key={index} item={item} /> } )}
            </Container>

        ) 
    }
    
  }


  export default Products ;