import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SignUp } from "../../services/users.api";
import { ButtonComponent } from "../commons/buttonComponent";
import TextField from '@mui/material/TextField';

export function RegistrationForm() {
  const [isDisabled, setIsdisabled] = useState(false);
  const [passwordSafefy, setPasswordSafety] = useState({
    equal: true,
    validFormat: true
  })
  const navigate = useNavigate();

  async function handleForm(e) {
    e.preventDefault();
    setIsdisabled(true);

    if (e.target[2].value !== e.target[4].value) {
      setPasswordSafety({ equal: false, validFormat: true })
      setIsdisabled(false);
      return
    }
    const email = e.target[0].value;
    const password = e.target[2].value;

    try {
      await SignUp(email, password);
      return navigate("/");
    } catch (error) {
      if (error.response.data.name === "invalidPasswordFormatError") {
        setPasswordSafety({ equal: true, validFormat: false })
      }

      if (error.response.data === '"email" must be a valid email') {
        alert('"email" deve ser um email valido ');
      } else {
        alert(error.response.data.message);
      }

      console.error(`error ${error.response.status}`, error.response.data);
      setIsdisabled(false);
    }
  }

  return (
    <MuiForm onSubmit={handleForm} passwordSafefy={passwordSafefy}>
      <TextField
        label="Email"
        type="email"
        required
        disabled={isDisabled}
        fullWidth />

      <TextField
        label="Senha"
        type="password"
        required
        disabled={isDisabled}
        fullWidth />

      <TextField
        label="Confirme sua senha"
        type="password"
        disabled={isDisabled}
        required
        fullWidth />

      <h2>Senhas devem ser iguais</h2>
      <h3>Senha deve conter ao menos, 8 caracteres, uma letra maiuscula, uma letra minuscula, um numero, um caracter especial</h3>

      <ButtonComponent disabled={isDisabled} isDisabled={isDisabled}>Cadastrar</ButtonComponent>
    </MuiForm>
  )
}

const MuiForm = styled.form`
height: 400px;
width: 300px;
  div{
    margin: 5px 0;
    input{
      width: 90%;
    }
  }
  h2{
    display: ${props => props.passwordSafefy.equal ? "none" : "flex"};
    margin: 10px;
    color: red;
  }
  h3{
    display: ${props => props.passwordSafefy.validFormat ? "none" : "flex"};
    margin: 10px;
    color: red;
  }
`
