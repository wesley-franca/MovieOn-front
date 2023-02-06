import styled from "styled-components";
import logo from "../../assets/images/logo.png"


export function NotLogedContainer({ children }) {
  return (
    <Container>
      <div>
        <img src={logo} alt="Logo"></img>
        <NameTitle>MovieOn</NameTitle>
      </div>

      {children}
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 70px 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img{
    width: 100px;
  }
`;

const NameTitle = styled.h1`
  font-size: 40px;
  color: #000000;
  font-family: 'Fugaz One', cursive;
`;

