import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
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
    top: 10%;
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
  background-color: #f5fbfd;
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


const Pradact = ({name,cat}) => {
  return (
    <div>
      BRRRRRRR
    </div>
  )
}


function empty(element) {
  while(element.firstElementChild) {
     element.firstElementChild.remove();
  }
}

const goto = (e) => {
  var ha = document.getElementById('brr')
  console.log(e.target.img)
  // empty(ha)
  empty(ha)
  // ha.innerHTML = ""


  var tki = Pradact('grrr')
  if (tki)
    ha.append(tki)


}




const Product = ({item}) => {
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `newPath`; 
      navigate(path);
    }

    return (
        <Container>
          <Text>{item.productname}</Text>
            <Image src ={item.src} />
            
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                
                <Icon onClick={goto} > 
                      <SearchOutlined/>
                </Icon>
                
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
                
            </Info>   
            
        </Container>
        
    )
}

export default Product ;
