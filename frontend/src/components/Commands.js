import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';


const Container = styled.div`

`

const Commands = (props) => {
    const data = props.cmds

    const handleClick = () => {
        props.snd(false)
    }

    console.log('tttt', data.split('//'))

    return(
        <Container>
            <ArrowBackIcon onClick={()=>handleClick()}/>
            <div> {data} </div>

        </Container>
    )
} 


export default Commands ;