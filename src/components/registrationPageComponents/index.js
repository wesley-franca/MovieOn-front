import { useNavigate } from "react-router-dom";
import { NotLogedContainer } from "../commons/notLogedPageStyle";
import { BlueLink } from "../commons/blueLink";
import { RegistrationForm } from "./registrationForm";

//TODO: check if user is already loged and redirect to /perfil

export function RegistrationPageIndex() {
  const navigate = useNavigate();
  return (
    <NotLogedContainer>
      <RegistrationForm />
      <BlueLink onClick={() => { navigate("/") }}>Já tem cadastro?</BlueLink>
    </NotLogedContainer>

  )
}
