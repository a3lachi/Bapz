import React, { useState, useEffect } from 'react';
import { Add, Remove } from '@mui/icons-material';
import styled from 'styled-components';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import { mobile } from "../responsive";
import {useLocation} from "react-router-dom";
// import { addProduct } from '../redux/cartRedux';
// import { useDispatch } from 'react-redux';

import axios from 'axios'


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
`;


const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 650;
`;

const FilterColor = styled.div`
  width: 100%;
  height: 100%;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Colorz = styled.div`
  margin-top:5px;
  
`


const Color = styled.div`
  padding:0 10px 0 10px; 
  outline-style: solid;
  outline-width:1px;
  margin-right:10px;
  cursor:pointer;
  &:hover {
    background-color:#f8f4f4;
  }
  
`


const Product = (id) => {

  const [data , setData] = useState([])
  const location = useLocation();
  const name = location.pathname.split("/")[3];

  
  
  useEffect(()=>{
      axios
          .get(`/api/bapz/product/${name}`)
          .then((res) => setData(res.data))
          .catch((err) => console.log(err));
  }, [])
    
  
  const product = data[0]
  const [quantity, setQuantity] = useState(1);

  const colorz= ['red','blue','green']

  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

    const handleQuantity = (type) => {
      if(type === "dec"){
        quantity > 1 && setQuantity(quantity-1);
      }else if(type === "inc") {
        setQuantity(quantity+1);
      }
    };

    const handleClick = () => {
      //update Cart Using Redux / addProduct Action
      //dipatch action so the components recognize it s a Redux action
      // dispatch(addProduct({...product, quantity, color, size}));
    };

    
    
    if(product) {
      const lerz = product.color.split(',')
      console.log('COLORZ DYALK  ',lerz)
      const actualColor = lerz[0]
      const immg = product.src.split(',') 
      console.log('PARADACT DYALK  ',immg[0])
      const productSize = product.size.split(',') 
      return (
          <Container>
              <Navbar id={id.id} />
              <Announcement/>
              <Categories />
              <Wrapper>
                  <ImgContainer>
                      <Image style={{width:"80%"}} src={immg[0]+'.jpg'} />
                  </ImgContainer>
                  <InfoContainer className='col'>
                      <Title className='row'>{product.productname}</Title>

                      <Price className='row'>{product.price}</Price>
                      <FilterContainer lassName='row' >
                        <FilterColor>
                        <div className='row' style={{position:"relative"}}>
                              <FilterTitle >COLOR:</FilterTitle>
                                </div>
                              
                              <Colorz className='row'>
                              <Color style={{backgroundColor:"#f8f4f4"}}>{lerz[0]}</Color>
                              {lerz?.map((color,idx) => ( idx>0 ?
                                <Color id={idx}>{color}</Color> :<></>
                              ))}
                              </Colorz>
                        
                              </FilterColor>   
                          <Filter>
                              <FilterTitle>Size</FilterTitle>
                              <FilterSize onChange={(e)=>setSize(e.target.value)}>
                                {productSize?.map((s)=>(
                                  <FilterSizeOption key={s}>
                                    {s}
                                  </FilterSizeOption>
                                ))}
                              </FilterSize>
                          </Filter>
                      </FilterContainer>
                      <AddContainer>
                          <AmountContainer>
                              <Remove onClick={() => handleQuantity("dec")}/>
                              <Amount>{quantity}</Amount>
                              <Add onClick={() => handleQuantity("inc")}/>
                          </AmountContainer>
                          <Button onClick={handleClick}>ADD TO CART</Button>
                      </AddContainer>
                  </InfoContainer>
              </Wrapper>
              <Newsletter/>
              <Footer/>
          </Container>
      )
    } else return null
}

export default Product
