import styled from "styled-components";





const Footer = () => {
    const Container = styled.div`
        height: 100px;
        color : blue ;
        position:flex;
        outline: solid;
        margin-top:10px;
    `
    return (
        <Container className="row">Footer</Container>
    )
}


export default Footer ;