import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from "styled-components";


const Productz = styled.div`
    width:100%;
    margin:0 auto;
    height: 300px;
`


const Product = styled.div `
    position:flex;
    outline : solid;
    width:100%
`


const Products = ({cat, filters, sort}) =>{
    
    const [data , setData] = useState([])
    const [fetched , setFetched ] = useState([])
  
    useEffect(()=>{
        axios
            .get("/api/bapz/")
            .then((res) => setData(res.data))
            .then(setFetched(1))
            .catch((err) => console.log(err));
    }, [fetched])
    
    if(data[0]) {
        return(
            <Productz className="row" >
                <Product className="col">
                    Bapzzzssss {data[0].price}
                </Product>
            </Productz>

        ) 
    }
    
  }


  export default Products ;