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




    cmds.length===0 && axios.post('/api/customer/token',{jwt:jwwt})
        .then((res)=> setCmds(res.data.data))
        .catch((err) => console.log("Error during fetching customer profil data.",err) )


    const handleClick = () => {
        props.snd(false)
    }

    console.log('HAMAWSSL',cmds)
    return(
        <Container>
            <ArrowBackIcon onClick={()=>handleClick()}/>
            {/* {cmds?.length>1 && cmds?.map((elem)=>(
                <div>{elem[0][0]}</div>
            ))} */}

        </Container>
    )
} 


export default Commands ;