import styled from "styled-components"
import { BsGear } from 'react-icons/bs';
import logo from "../assets/images/logo.png"
import { useNavigate } from "react-router";

export function Header() {
  const navigate = useNavigate()
  return (
    <Container>
      <img src={logo} alt="Logo" onClick={()=>{navigate("/filmes")}} />
      <NameTitle onClick={()=>{navigate("/filmes")}}>
        MovieOn
      </NameTitle>
      <BsGear />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  img {
    width: 50px;
  }
  svg {
    font-size: 30px;
  }
  background-color: #CDE9EE;
`;

const NameTitle = styled.h1`
  font-size: 30px;
  color: #000000;
  font-family: 'Fugaz One', cursive;
`;