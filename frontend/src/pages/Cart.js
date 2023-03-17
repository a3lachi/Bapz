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
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';



const Container = styled.div`
    padding-top:30px;
    padding-bottom:30px;
    position: relative;
    width:100%;
    align-items: center;
    display:flex;
    flex-direction:column;
    ${mobile({flexDirection:"column" })}
`
const Bar = styled.div`
    position: absolute ;
    top:10vh;
    left : 10vw;
    height:20vh;
    width:20vw;
    display:flex;
    flex-direction:column;
    align-items: center;
    padding : 20px 10px 10px 10px ;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    
`
const Total = styled.div`
    text-align: center;
    margin-right:auto;
    padding : 10px 10px 10px 10px ;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
`

const Buttn = styled.button`
    padding : 5px 10px 5px 10px ;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;

`
const Wrapper = styled.div`
    
    position: relative;
    width:100%;
    align-items: center;
    display:flex;
    flex-direction:column;
    
`

const CartProd = styled.div`
    display:flex;
    flex-direction:row;
    position:relative;
    ${mobile({flexDirection:"column" , paddingBottom:"20px" })}
    
    width:50vw;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
    margin-bottom:20px;
    
    
    ${mobile({ textAlign: "center" })}
`

const CartPro = styled.div`
    display:flex;
    flex-direction:row;
    ${mobile({flexDirection:"column" , paddingBottom:"20px" })}
    width:50vw;
    padding:20px 20px 20px 20px ;
    box-shadow: rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
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

const Del = styled.div`
    display:"inline-block" ;
    width:300px;
    
`

const Br = styled.div`
    display: inline-block;
    position:absolute;
    right:10px;
    top: 10px;
    
`




const Info = styled.div`
    padding-top:20px;
    padding-left:20px;
    padding-right:20px;
    padding-bottom:20px;
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
    margin-top:10px;
    display:flex;
`



const Cart = (id) => {
    var itms = useSelector((state) =>  state.cart.itms)
    itms = itms.length>0 ? itms :  JSON.parse(window.localStorage.getItem('state'));

    const [ itss , setItss ] = useState([])
    const addItem = (newItem) => {
        setItss([...itss, newItem]);
      };

    function countOccurrences(MyArray) {
        const counts = {};
        MyArray.forEach(element => {
            counts[element] = (counts[element] || 0) + 1;
        });
        const result = Object.entries(counts).map(([element, count]) => ({ element, count }));
        return result;
    }

    const lkhbr = countOccurrences(itms) ;

    useEffect(() => {
        const fetchItems = async () => {
          try {
            const promises = lkhbr.map((item) => axios.get(`/api/bapz/${item.element}`));
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
        const sr = src.split(',')
        return sr[0]+'.jpg'
    }

    const tots = () => {
        var tot = 0 ;
        itss.forEach((elem)=>(tot+=Number(elem[0].price.split('$')[1])));
        return tot;
    }
    console.log('itss ',itss)

    

    console.log('LKHIIIBRA  ',lkhbr)

    return (
        <>
            <Announcement />
            <Navbar id={id.id} />
            <Categories />

            <Container>
                
                <Wrapper>
            {itss.length>0 ? itss.map((item,idx) => ( 
                <><CartProd id={idx}>

                    <Mage ><Image src={getSrc(item[0].src)} ></Image></Mage>

                    <Info >
                    <Name>{item[0].productname}</Name>
                    <Color><Ler> {item[0].color.split(',')[0]} </Ler> </Color>
                    <Price>{item[0].price}</Price>
                    <Qtti><b>Quantity : {lkhbr[idx].count}</b></Qtti>

                    </Info>
                    <Del><Br><RemoveCircleOutlineIcon></RemoveCircleOutlineIcon></Br></Del>


                </CartProd>

                </>
            )) : <></>}

            <CartPro><Total><b>TOTAL:</b> US${tots()}</Total><Buttn>CHECKOUT</Buttn></CartPro>
            </Wrapper>
            </Container>
            
            
            <Newsletter />
            <Footer />
        </>
    )

}

export default Cart ;