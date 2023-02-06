import styled from "styled-components"
import { RiMovie2Line } from 'react-icons/ri';
import { BsFillPeopleFill } from 'react-icons/bs';
import { GiPopcorn } from 'react-icons/gi';
import { useNavigate } from "react-router-dom";

export function Footer() {
  const navigate = useNavigate();
  return (
    <Container>
      <RiMovie2Line onClick={()=>{navigate("/filmes")}}/>
      <GiPopcorn onClick={()=>{navigate("/conexoes")}}/>
      <BsFillPeopleFill onClick={()=>{navigate("/pessoas")}}/>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
  position: fixed;
  bottom: 0;
  left: 0;
  svg {
    font-size: 40px;
  }
  background-color: #CDE9EE;
`;
