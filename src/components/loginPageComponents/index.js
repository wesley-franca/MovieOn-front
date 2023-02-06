import { useNavigate } from "react-router-dom";
import { NotLogedContainer } from "../commons/notLogedPageComponent";
import { BlueLink } from "../commons/blueLink";
import { LoginForm } from "./loginForm";

//TODO: check if user is already loged and redirect to /perfil

export function LoginPageIndex() {
  const navigate = useNavigate();
  return (
    <NotLogedContainer>
      <LoginForm />
      <BlueLink onClick={() => { navigate("/cadastro") }}>Cadastre-se</BlueLink>
    </NotLogedContainer>
  )
}
