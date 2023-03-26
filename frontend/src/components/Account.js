import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styled from 'styled-components';


const Container = styled.div`
    

`
const Wrapper = styled.div`
    padding-top:20px;
    height: 100%;
`


const Account = () => {
    const handleClick = () => {

    }

    return(
        <Container>
            <ArrowBackIcon onClick={()=>handleClick()}/>
            <Wrapper>
                KUUNT

            </Wrapper>

        </Container>
    )
}


export default Account ;