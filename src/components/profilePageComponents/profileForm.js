import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PostEnrollment } from "../../services/enrollment.api";
import { ButtonComponent } from "../commons/buttonComponent";
import userContext from "../../utils/contexts/userContext";

export function ProfileForm() {
  // eslint-disable-next-line no-unused-vars
  const [token, setToken] = useContext(userContext);
  const [isDisabled, setIsdisabled] = useState(false);
  const navigate = useNavigate();

  async function handleForm(e) {
    e.preventDefault();
    setIsdisabled(true);
    const name = e.target[0].value;
    const lastName = e.target[1].value;
    const instagram = e.target[2].value;
    const whatsapp = e.target[3].value;
    const birthday = e.target[4].value;
    const biography = e.target[5].value;
    if (birthday.toString() !== "Invalid Date") {
      try {
        await PostEnrollment({ name, lastName, instagram, whatsapp, biography, birthday, token });
        return navigate("/filme");
      } catch (error) {
        console.error(`error ${error.response.status}`, error.response.data);
        alert(error.response.data.message);
        setIsdisabled(false);
      }
    } else {
      alert("Data invalida")
      setIsdisabled(false);
    }
  }

  return (
    <Form onSubmit={handleForm}>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        disabled={isDisabled}
        required />

      <input
        type="text"
        name="lastName"
        placeholder="Sobrenome"
        disabled={isDisabled}
        required />

      <input
        type="text"
        name="instagram"
        placeholder="Instagram"
        disabled={isDisabled}
        required
      />

      <input
        type="text"
        name="whatsapp"
        placeholder="WhatsApp"
        disabled={isDisabled}
        required
      />

      <div>
        Data de nascimento
      </div>

      <input
        type="date"
        name="birthday"
        min="02-06-2008"
        disabled={isDisabled}
        required
      />

      <input
        type="text"
        name="biography"
        placeholder="Bio..."
        disabled={isDisabled}
        required
      />
      <ButtonComponent disabled={isDisabled} isDisabled={isDisabled}>Cadastrar</ButtonComponent>
    </Form>
  )

}

const Form = styled.form`
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
  div{
    display: flex;
    
  }
`;
