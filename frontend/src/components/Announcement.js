import styled from "styled-components";

const Container = styled.div`
        height: 20px;
        color : green ;
        position:flex;
        outline: solid;
        margin-top:10px;
`



const Announcement = () => {
    
    return (
        <Container className="row">NEW PROMOTION SOON</Container>
    )
}


export default Announcement ;