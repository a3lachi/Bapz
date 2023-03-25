import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';


const Container = styled.div`

`

const Commands = (cmds) => {

    const handleClick = () => {
        console.log('qas hna')
    }



    return(
        <Container>
            <ArrowBackIcon onClick={()=>handleClick()}/>
            <div> BRRR </div>

        </Container>
    )
} 


export default Commands ;