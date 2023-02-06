import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetEnrollment } from "../../services/enrollment.api";
import { Title } from "../../styles/titleStyle";
import userContext from "../../utils/contexts/userContext";
import { LogedContainer } from "../commons/logedPageComponent";
import { ProfileForm } from "./profileForm";

export function ProfilePageIndex() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (token === null) {
      return (navigate("/"));
    }
    GetEnrollment(token).then((res) => {
      return (navigate("/filmes"));
    }).catch((error) => {
      console.error(error);
    });
  },);

  return (
    <LogedContainer>
      <Title>Complete seu perfil</Title>
      <ProfileForm />
    </LogedContainer>
  )
}

