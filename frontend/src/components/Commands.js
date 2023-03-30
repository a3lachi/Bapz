import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';
import {  useSelector} from 'react-redux';
import axios from 'axios'
import { useState } from 'react';
import Command from './Command'



const Container = styled.div`
    

`
const Wrapper = styled.div`
    padding-top:20px;
    height: 100%;
`


const Comand = styled.div`
    padding: 10px 10px 10px 10px;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
    margin-bottom:10px;
    &:hover {
        background-color :  #f8f4f4 ;
    }
`





const Commands = (props) => {
    const jwwt = useSelector((state) =>  state.user.jwt)

    const [ cmds , setCmds] = useState("")

    const [ choseCmd , setChoseCmd ] = useState([])

    const Handleclick = (id) => {
        setChoseCmd(cmds[id])
    }

    cmds.length===0 && axios.post('/api/customer/token',{jwt:jwwt})
        .then((res)=> setCmds(res.data.data))
        .catch((err) => console.log("Error during fetching customer profil data.",err) )


    const handleClick = () => {
        if (choseCmd.length<1)
            props.snd(false)
        else 
            setChoseCmd([])
    }

    
    console.log('HAMAWSSL',cmds)
    if (cmds?.length>0) {
        return(
            <Container>
                <ArrowBackIcon onClick={()=>handleClick()}/>
                <Wrapper>
                {cmds?.length>0 && choseCmd?.length<1 && cmds?.map((elem,indx)=>(
                    <Comand id={indx} key={indx} onClick={(e)=>(Handleclick(e.target.id))} >
                    Command passed on {elem[0]} :
                    { elem[1]?.map((el,indx)=>(<img key={indx} alt={""} style={{width:'40px' , mixBlendMode: 'multiply'}} src={'/media/images/'+el[1]}/>)) }
                    </Comand>
                ))}
                </Wrapper>
                { choseCmd.length>1 && <Command cmd={choseCmd} />}
            </Container>
        )
    } else {
        return (<></>)
    } 
} 


export default Commands ;