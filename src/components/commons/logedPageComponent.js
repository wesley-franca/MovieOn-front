import styled from "styled-components";
import { Footer } from "../footer";
import { Header } from "../header";

export function LogedContainer({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 70px 0;
`;
