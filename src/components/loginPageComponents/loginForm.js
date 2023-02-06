import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SignIn } from "../../services/auth.api";
import userContext from "../../utils/contexts/userContext";
import { ButtonComponent } from "../commons/buttonComponent";

export function LoginForm() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useContext(userContext);
  const [isDisabled, setIsdisabled] = useState(false);
  const navigate = useNavigate();
  

  async function handleForm(e) {
    e.preventDefault();
    setIsdisabled(true);
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const result = await SignIn(email, password);
      localStorage.setItem("token", result.data.token)
      setToken(result.data.token)
      return navigate("/perfil");

    } catch (error) {
      console.error(`error ${error.response.status}`,  error.response.data);
      alert(error.response.data.message);
      setIsdisabled(false);
    }
  }

  return (
    <SignUpForm onSubmit={handleForm}>
      <input
        type="email"
        name="Email"
        placeholder="Email"
        disabled={isDisabled}
        required />

      <input
        type="password"
        name="password"
        placeholder="Senha"
        disabled={isDisabled}
        required
      />

      <ButtonComponent disabled={isDisabled} isDisabled={isDisabled}>Entrar</ButtonComponent>
    </SignUpForm>
  )

}

const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 303px;
    height: 45px;
    border: solid 1px #d5d5d5;
    background-color: #ffffff;
    padding: 15px;
    border-radius: 5px;
    margin: 8px;
    ::placeholder {
      font-weight: 400;
      color: #000000;
      font-style: italic;
    }
    font: 600 22px/26px "Nunito", sans-serif;
    color: #000000;
  }
`;
