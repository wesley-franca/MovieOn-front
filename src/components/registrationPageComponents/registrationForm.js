import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SignUp } from "../../services/users.api";
import { ButtonComponent } from "../commons/buttonComponent";

export function RegistrationForm() {
  const [isDisabled, setIsdisabled] = useState(false);
  const [passwordSafefy, setPasswordSafety] = useState({
    // hasNubers: "gray",
    // hasUpperCase: "gray",
    // hasLowerCase: "gray",
    // hasSpecialChar: "gray",
    equal: true
  })
  const navigate = useNavigate();


  async function handleForm(e) {
    e.preventDefault();
    setIsdisabled(true);
    if (e.target[1].value === e.target[2].value) {
      setPasswordSafety({ ...passwordSafefy, equal: true })

      const email = e.target[0].value;
      const password = e.target[1].value;

      try {
        await SignUp(email, password);
        return navigate("/");
      } catch (error) {
        console.error(`error ${error.response.status}`,  error.response.data);
        alert(error.response.data.message);
        setIsdisabled(false);
      }

    } else {
      setPasswordSafety({ equal: false })
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
        name="Password"
        placeholder="Senha"
        disabled={isDisabled}
        required
      />

      <PasswordRulesBlock> 
        {/*TODO: finalizar ou trocar pelo Mui*/}
        <h3>Sua senha deve conter no minimo:</h3>
        <h3>8 caracteres</h3>
        <h3>1 letra maiuscula</h3>
        <h3>1 letra minuscula</h3>
        <h3>1 numero</h3>
        <h3>1 caractere especial</h3>
      </PasswordRulesBlock>

      <input
        type="password"
        name="Confirme sua senha"
        placeholder="Confirme sua senha"
        disabled={isDisabled}
        required
      />
      <PasswordEqualityBlock passwordSafefy={passwordSafefy}>
        <h3>Senhas não conferem</h3>
      </PasswordEqualityBlock>
      <ButtonComponent disabled={isDisabled} isDisabled={isDisabled}>Cadastrar</ButtonComponent>
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

const PasswordRulesBlock = styled.div`
  width: 303px;
  display:flex;
  font-size: 12px;
  flex-direction: column;
  align-items: flex-start !important;
  margin-left: 30px;
  gap: 5px;
  :nth-child(1) {
    color: red !important;
  }
`;

const PasswordEqualityBlock = styled.div`
  width: 303px;
  display:${props => props.passwordSafefy.equal ? "none !important" : "flex"};
  flex-direction: column;
  align-items: flex-start !important;
  gap: 5px;
  margin: 0 0 10px 30px;
  color: red;
`;