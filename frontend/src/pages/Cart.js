import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { useSelector} from "react-redux";
import axios from 'axios';
import { useState , useEffect} from 'react'

import styled from "styled-components"
import { mobile } from '../responsive';
import { Button } from '@mui/material';


const Container = styled.div`
    padding-top:30px;
    position: relative;
    width:100%;
    align-items: center;
    display:flex;
    flex-direction:column;
`

const CartProd = styled.div`
    display:flex;
    flex-direction:row;
    ${mobile({flexDirection:"column" })}
    width:80vw;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
    margin-bottom:20px;
    
    ${mobile({ textAlign: "center" })}
`
const Mage = styled.div`
    display:"inline-block" 
    width:300px;
`
const Image = styled.img`
    height:200px;
    margin-left:20px;

    ${mobile({display:"inline-block" , marginLeft:"0"})}
`






const Info = styled.div`
    padding-top:20px;
    padding-left:20px;
    padding-right:20px;
    text-align: start;
    display:flex;
    flex-direction:column;
    ${mobile({paddingTop:"0px" })}
`


const Name = styled.div`
    font-size:30px;    
    line-height: 1;
`


const Color = styled.div`
    margin-top:20px;
    display:flex;

` 
const Ler = styled.div`
    padding:1px 10px 1px 10px; 
    outline-style: solid;
    outline-width:1px;
` 



const Price = styled.div`
    margin-top:20px;
    display:flex;
`

const Qtti = styled.div`
    margin-top:20px;
    display:flex;
`



const Cart = (id) => {
    const itms = useSelector((state) =>  state.cart.itms);

    const [ itss , setItss ] = useState([])
    const addItem = (newItem) => {
        setItss([...itss, newItem]);
      };

    useEffect(() => {
        const fetchItems = async () => {
          try {
            const promises = itms.map((item) => axios.get(`/api/bapz/${item}`));
            const results = await Promise.all(promises);
            const data = results.map((res) => res.data);
            setItss(data);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchItems();
      }, []);


    const getSrc = (src) => {
        console.log('HA SRCCC ',src)
        const sr = src.split(',')
        return sr[0]+'.jpg'
    }

    return (
        <>
            <Announcement />
            <Navbar id={id.id} />
            <Categories />

            <Container>
            {itss ? itss.map((item,idx) => ( 
                <CartProd class="container" id={idx}>

                    <Mage ><Image src={getSrc(item[0].src)} ></Image></Mage>

                    <Info >
                    <Name>{item[0].productname}</Name>
                    <Color><Ler> {item[0].color.split(',')[0]} </Ler> </Color>
                    <Price>{item[0].price}</Price>
                    <Qtti>Quantity : </Qtti>

                    </Info>


                </CartProd>
            )) : <></>}

            </Container>
            
            <Newsletter />
            <Footer />
        </>
    )

}

export default Cart ;