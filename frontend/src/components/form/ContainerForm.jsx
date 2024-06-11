import styled from "styled-components"

const Container = styled.div`
    padding: 20px 30px;
    background-color: #e0e0e0;
    border-radius: 20px;
    position: absolute;
    top: 580px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
`

const ContainerForm = (props) => {
  return (
    <Container>
        {props.children}
    </Container>
  )
}

export default ContainerForm