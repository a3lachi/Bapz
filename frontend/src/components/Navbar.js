import styled from 'styled-components';
import { mobile } from '../responsive';
import {Link} from 'react-router-dom';
import { Opacity, Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge, rgbToHex } from '@mui/material';
import { red } from '@mui/material/colors';
import { useSelector } from "react-redux";



const Container = styled.div`
    height: 60px;
    margin-bottom:15px;
    ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-right:10px;
    ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    padding: 5px;

`;

const Input = styled.input`
    border: none;
    ${mobile({ width: "50px"})}
`

const Center = styled.div`
    flex: 1;
    text-align: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    transition: all 0.5s ease;
    display: inline-block;
    &:hover {
        transform: scale(1.3);
    }
    ${mobile({ fontSize: "22px", whiteSpace: "nowrap", padding:"2px 3px"})}
`

 

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;

const styleLink = {
    textDecoration: "none",
    color: "#874800" ,    
}


const Navbar = (id) => {

    var itms = useSelector((state) =>  state.cart.itms)

    return (
        <Container >
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{ color:"gray", fontSize: "16px" }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Link style={styleLink} to='/'>
                        <Logo>ALL-3</Logo>
                    </Link>
                </Center>
                <Right>
                {id.id ? 
                <Link style={styleLink} to="/profil">
                <MenuItem>PROFIL</MenuItem>
                </Link>
                : <><Link style={styleLink} to="/register">
                    <MenuItem>REGISTER</MenuItem>
                </Link>
                <Link style={styleLink} to="/login">
                    <MenuItem>SIGN IN</MenuItem>
                </Link></> }
                <Link style={styleLink} to="/cart">
                    <MenuItem>
                        <Badge color="primary" badgeContent={itms.length }>
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Link>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar;
