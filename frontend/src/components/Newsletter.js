import styled from "styled-components";





const Newsletter = () => {
    const Container = styled.div`
        height: 100px;
        color : red ;
        position:flex;
        outline: solid;
        margin-top:10px;
    `
    return (
        <Container className="row">Newsletter</Container>
    )
}


export default Newsletter ;