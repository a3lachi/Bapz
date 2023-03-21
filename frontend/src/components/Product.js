import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { store } from '../redux/store'
import {addOne} from '../redux/cartSlice'

const Smta = styled.div`
  position: absolute;
  width: 100%;
  top:87.3%;
`



const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: relative;

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
    font-weight: 600;
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
  z-index:5;
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
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:hover {
    transform: scale(1.25);
    z-index:5
  }
`;

const styleLink = {
  textDecoration: "none",
  color: "#874800" ,    
}

const Product = ({id,item}) => {
  const dispatch = useDispatch();

  const location = useLocation();
  const name = location.pathname.split("/")
  var too ="brr"
  if (name.length>2) {
    too =  item.productname ;
  }
  else {
    too =  "apparel/" + item.category + "/" + item.productname ;
  }

  
  const handleClick =() => {
    store.dispatch(addOne([item.ids]))
  }

  const ara = (ch) => {
    const brr = item.src.split('@')[0]
    if (ch==1) {
      const aa = brr.split(',')
      if (aa.length>1) 
        return brr.split(',')[1]+".jpg"
    }

    return brr.split(',')[0]+".jpg"
    

  }


  const navigate = useNavigate()
  
  const onMe = (event,payload) => { 
    const aydi = event.target.id
    const elems = document.getElementById('brr') 
    elems.childNodes.forEach((elem)=>{
      if (elem.id == aydi) {
        if (payload=='leave')
          elem.childNodes[1].src=ara(1)
        else 
          elem.childNodes[1].src=ara(0)
      }
    })
  }
  
  return (
      <Container id={id} onClick={(e) => navigate(too)}  onMouseEnter={(e)=> onMe(e,'leave') } onMouseLeave={(e) => { onMe(e,'rr') } }   >
          <Text id={id} >{item.productname}</Text>
          <Image id={id} src ={ara(0)} />
          <Smta id={id}>
            <Info id={id}>
                

                <Link id={id} style={styleLink} to={too}>
                  <Icon id={id}> 
                        <SearchOutlined style={{width:'15px'}} />
                  </Icon>
                </Link>
                
                <Icon id={id}>
                    <FavoriteBorderOutlined id={id}
                      onClick={
                        (e)=>{ e.stopPropagation() ; e.target.style.color=="red" 
                            ? e.target.style.color="black" 
                            : e.target.style.color="red" }
                      }
                      style={{width:'15px'}}
                    />
                </Icon>
                
            </Info> 
          </Smta>  
          
      </Container>
      
  )
}

export default Product ;
