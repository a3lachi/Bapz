import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';
import { useDispatch , useSelector} from 'react-redux';
import axios from 'axios'
import { useEffect, useState } from 'react';

const Container = styled.div`

`

const Commands = (props) => {
    const jwwt = useSelector((state) =>  state.user.jwt)

    const [ cmds , setCmds] = useState("")

    const dispatch = useDispatch()

    const HandleRes = (data,dispatch,setCmds) => {
        console.log('RAW',data.data)

       
        return data.data 
    
    } 

    cmds.length===0 && axios.post('/api/customer/token',{jwt:jwwt})
        .then((res)=> setCmds(HandleRes(res.data,dispatch,setCmds)))
        .catch((err) => console.log("Error during fetching customer profil data.",err) )


    const handleClick = () => {
        props.snd(false)
    }


    return(
        <Container>
            <ArrowBackIcon onClick={()=>handleClick()}/>
            

        </Container>
    )
} 


export default Commands ;