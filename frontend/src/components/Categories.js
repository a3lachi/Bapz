import React from 'react';
import styled from "styled-components";
import { mobile } from '../responsive';
import { Link } from "react-router-dom";


const Container = styled.div`
    padding: 20px;
    ${mobile({ padding: "0px", flexDirection:"column" })}
`
const CategoryItem = styled.div`
    display: flex;
    position: relative;
    margin : 5px;
    outline : solid;
    justify-content: center;
`

const Item = styled.div`
    font-size: 12px;
`


const styleLink = {
    textDecoration: "none",
    color: "#874800" ,    
}


const Categories = () => {
    const categories = ['T-shirt','Hoodie','Pant','Sneakers']
    return (
        <Container className='row'>
            {categories.map(item => (
                
                <CategoryItem key={item} className='col'>
                    <Link style={styleLink}>
                    <Item>{item}</Item>
                    </Link>
                </CategoryItem>
                
            ))}
        </Container>
    )
}

export default Categories
