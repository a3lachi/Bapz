import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useSelector } from 'react-redux';

const Container = styled.div`
    

`
const Wrapper = styled.div`
    padding-top:20px;
    height: 100%;
`


const Account = (props) => {

    const jwwt = useSelector((state) =>  (state.user.jwt)) ;
    const handleClick = () => {
        props.snd(false)
    }

    const [ info , setInfo ] = useState([])
    console.log(info)
    info.length===0 && axios.post('/api/customer/token',{jwt:jwwt})
        .then((res)=> setInfo(res.data.info))
        .catch((err) => console.log("Error during fetching customer profil data.",err) )

    if (info.length>1) {
        return(
            <Container>
                <ArrowBackIcon onClick={()=>handleClick()}/>
                <Wrapper>
                    <div style={{marginBottom:'10px'}} >EMAIL : {info[0]}</div>
                    <div style={{marginBottom:'10px'}} >PASSWORD : {info[1]}</div>
                    <div style={{marginBottom:'10px'}} >USERNAME : {info[4]}</div>
                    <div style={{marginBottom:'10px'}} >FIRST NAME : {info[2]}</div>
                    <div style={{marginBottom:'10px'}} >LAST NAME : {info[3]}</div>


                </Wrapper>

            </Container>
        )
    } else {
        return (<div style={{minHeight:'200px'}}/>)
    }
}


export default Account ;