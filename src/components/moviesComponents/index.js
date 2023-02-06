import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GetEnrollment } from "../../services/enrollment.api";
import userContext from "../../utils/contexts/userContext";
import { LogedContainer } from "../commons/logedPageComponent";

export function MoviesPageIndex() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (token === null) {
      return (navigate("/"));
    }
    GetEnrollment(token).then((res) => { }).catch((error) => {
      navigate("/perfil")
      console.error(error);
    });
  },);

  return (
    <LogedContainer>
    </LogedContainer>
  )
}

