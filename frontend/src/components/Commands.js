import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';


const Container = styled.div`

`

const Commands = (props) => {
    const dataStr = props.cmds

    const handleClick = () => {
        props.snd(false)
    }


    return(
        <Container>
            <ArrowBackIcon onClick={()=>handleClick()}/>
            <div> {dataStr} </div>

        </Container>
    )
} 


export default Commands ;