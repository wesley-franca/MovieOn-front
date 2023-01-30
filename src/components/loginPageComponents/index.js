import { useNavigate } from "react-router-dom";
import { NotLogedContainer } from "../commons/notLogedPageStyle";
import { BlueLink } from "../commons/blueLink";
import LoadSpinner from "../commons/loadSpinner";

export function LoginPageIndex() {
  const navigate = useNavigate();
  return (
    <NotLogedContainer>
      <LoadSpinner/>
      {/* <LoginForm /> */}
      <BlueLink onClick={() => { navigate("/cadastro") }}>Cadastre-se</BlueLink>
    </NotLogedContainer>
  )
}
