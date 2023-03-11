import React from 'react';
import styled from "styled-components";
import { mobile } from '../responsive';

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

const Categories = () => {
    const categories = ['T-shirt','Hoodie','Pant','Sneakers']
    return (
        <Container className='row'>
            {categories.map(item => (
                <CategoryItem key={item} className='col'>
                    <Item>{item}</Item>
                    
                </CategoryItem>
            ))}
        </Container>
    )
}

export default Categories
