import { useState } from "react";
import styled from "styled-components";
import { ButtonComponent } from "../commons/buttonComponent";

export function RegistrationForm() {
  const [isDisabled, setIsdisabled] = useState(false);


  function handleForm(e) {
    e.preventDefault();
    setIsdisabled(true);
    if (e.target[1].value === e.target[2].value) {
      // const body = {
      //   email: e.target[0].value,
      //   password: e.target[1].value,
      // };

      try {
        // await signUp(body);
        // return navigate("/login");
      } catch (error) {
        // console.error(error);
      //     alert(`${error.response.data}`);
      //     setIsdisabled(false);
      }
      // 
      //   .then(() => {
      //   })
      //   .catch(error => {
      //     
      //   });

    } else {
      setIsdisabled(false);
      alert("Por favor, verifique os dados inseridos");
    }
  }

  return (
    <SignUpForm onSubmit={handleForm}>
      <input
        type="email"
        name="email"
        placeholder="Email"
        disabled={isDisabled}
        required />
      <input
        type="password"
        name="password"
        placeholder="Password"
        disabled={isDisabled}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        disabled={isDisabled}
        required
      />
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
    margin-bottom: 15px;
    ::placeholder {
      font-weight: 400;
      color: #000000;
      font-style: italic;
    }
    font: 600 22px/26px "Nunito", sans-serif;
    color: #000000;
  }
`;
