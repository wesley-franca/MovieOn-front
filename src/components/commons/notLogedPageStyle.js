import styled from "styled-components";

export function NotLogedContainer({ children }) {
  return (
    <Container>
      <NameTitle>MovieOn</NameTitle>
      {children}
    </Container>
  )
}


const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 50px 0 80px 0;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const NameTitle = styled.h1`
  font-size: 40px;
  color: #000000;
  font-family: 'Fugaz One', cursive;
`;

