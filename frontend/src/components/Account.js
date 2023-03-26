import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    

`
const Wrapper = styled.div`
    padding-top:20px;
    height: 100%;
`


const Account = (props) => {
    const handleClick = () => {
        props.snd(false)
    }

    const [ info , setInfo ] = useState([])

    info.length===0 && axios.post('/api/customer/token',{jwt:jwwt})
        .then((res)=> setCmds(res.data.data))
        .catch((err) => console.log("Error during fetching customer profil data.",err) )

    return(
        <Container>
            <ArrowBackIcon onClick={()=>handleClick()}/>
            <Wrapper>
                EMAIL : 

            </Wrapper>

        </Container>
    )
}


export default Account ;