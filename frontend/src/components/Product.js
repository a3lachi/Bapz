import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom";



const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.15);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;
const Text = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 3%;
    display: flex;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    text-align:center;
    opacity: 0;
    z-index:2
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(89,100,54);
  box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

  position: relative;
  &:hover ${Text}{
    opacity: 1;
    z-index:2
  }
  &:hover ${Info}{
    opacity: 1;
  }
`;


const Image = styled.img`
  height: 75%;
  z-index: 1;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.2);
    z-index:5
  }
`;

const styleLink = {
  textDecoration: "none",
  color: "#874800" ,    
}

const Product = ({item}) => {
  const location = useLocation();
  const name = location.pathname.split("/")
  var too ="brr"
  if (name.length>2) {
    too =  item.productname ;
  }
  else {
    too =  "apparel/" + item.category + "/" + item.productname ;
  }
  return (
      <Container>
        <Text>{item.productname}</Text>
          <Image src ={item.src} />
          
          <Info>
              <Icon>
                  <ShoppingCartOutlined/>
              </Icon>
              <Link style={styleLink} to={too}>
                <Icon > 
                      <SearchOutlined/>
                </Icon>
              </Link>
              
              <Icon>
                  <FavoriteBorderOutlined/>
              </Icon>
              
          </Info>   
          
      </Container>
      
  )
}

export default Product ;
