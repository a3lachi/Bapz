import React from 'react';
import styled from "styled-components";
import { mobile } from '../responsive';
import { Link,Navigate } from "react-router-dom";
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
        color: white;
        transform: scale(1.2)
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
    }
    
`



const styleLink = {
    zIndex:4,
    height:'20px',
    fontWeight: 'bold',
    display: 'flex',
    position: 'relative',
    margin : '5px',
    justifyContent: 'center',
    backgroundColor: '#ffcc66',
    boxShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px',
   
    
    textDecoration: "none",
    color: "#874800" ,    
}



const Categories = () => {
    const categories = ['T-shirt','Hoodie','Pant','Sneakers','Hats','Bags','Watches']
    const categoriesBackend = ['t-shirt','hoodie','pants','sneakers','hats','bags','watches']

    const location = useLocation();
    const name = location.pathname.split("/")
    console.log(name);
    const navigate = useNavigate();

    const too = (idx) => { return '/apparel/'+categoriesBackend[idx] }

    return (
        <Container  className='row'>
            {categories.map((item,idx) => (
                <Link  to={too(idx)} id="lanks" key={item} className='col' style={styleLink}>
                    
                        <Item>{item}</Item>
                    
                </Link>
                
            ))}
        </Container>
        
    )
}

export default Categories
