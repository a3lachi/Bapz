import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';
import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@mui/icons-material";


const Container = styled.div`
    padding-bottom:30px;
    padding-left:30px;
    padding-right:20px;
    opacity: 0.9;
    display: flex;
    background-color: #874800;
    color:white;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
    flex: 1;
    flex-direction: column;
    padding: 20px;
    
`;

const Logo = styled.h1``;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
  ${mobile({ alignItems: "center", justifyContent:"center" })}
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
    return (
        <Container className='row'>
            <Left>
                <Logo>Bapz</Logo>
                <Desc>
                    This text should in no way exhibit a failed humouristic attempt to impress the reader's eyes, I should have sticked with Lorep Imsup.
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight:"10px"}}/> 11 rue de Médecis  , Clermont-Ferrand 63000
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight:"10px"}}/> +33 999 666 333
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight:"10px"}} /> contact@bapz.io
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer
