import styled from "styled-components";





const Announcement = () => {
    const Container = styled.div`
        height: 20px;
        color : green ;
        position:flex;
        outline: solid;
        margin-top:10px;
    `
    return (
        <Container className="row">NEW PROMOTION SOON</Container>
    )
}


export default Announcement ;