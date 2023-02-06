import styled from "styled-components";
import LoadSpinner from "./loadSpinner";

export function ButtonComponent({ isDisabled, children }) {
  return (
    <Button isDisable={isDisabled}>
      <LoadSpinner isDisabled={isDisabled}>{children}</LoadSpinner>
    </Button>
  )
}

const Button = styled.button`
  width:  300px;
  height: 45px;
  gap: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  border: none;
  border-radius: 10px;
  color: #000000;
  background-color: #CDE9EE;
  /* opacity: ${props => props.isDisabled ? 0.7 : 1} */
  active{
    transform: ${props => props.isDisabled ? "" : "translateY(2px)"};
  }
`;