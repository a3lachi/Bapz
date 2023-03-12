import React from 'react';
import styled from "styled-components";
import { mobile } from '../responsive';
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom";
import { useNavigate } from "react-router-dom"


const Container = styled.div`
    padding: 20px;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`

const Item = styled.div`
    font-size: 12px;
    transition: all .2s ease-in-out;

    :hover{
        color: black;
        cursor: none;
        transform: scale(1.1)
    }
    
    
`


const CategoryItem = styled.div`
    height:20px;
    font-weight: bold;
    display: flex;
    position: relative;
    margin : 5px;
    justify-content: center;
    background-color: #ffcc66;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
    :hover {
        opacity: 0.7;
        cursor: none;
    }
    
`



const styleLink = {
    textDecoration: "none",
    color: "#874800" ,    
}



const Categories = () => {
    const categories = ['T-shirt','Sweats','Pant','Sneakers','Hats']
    const categoriesBackend = ['t-shirts','sweats','pants','sneakers','hats']

    const location = useLocation();
    const name = location.pathname.split("/")
    console.log(name)

    const too = (idx) => {
        if (name.length>2) {
            return categoriesBackend[idx];
        }
        else {
            return "apparel/"+categoriesBackend[idx] ;
        }
    }

    return (
        <Container  className='row'>
            {categories.map((item,idx) => (
                
                <CategoryItem  key={item} className='col'>
                    <Link  to={too(idx)} style={styleLink}>
                    <Item>{item}</Item>
                    </Link>
                </CategoryItem>
                
            ))}
        </Container>
    )
}

export default Categories
