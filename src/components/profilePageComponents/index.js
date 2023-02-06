import { Title } from "../../styles/titleStyle";
import { LogedContainer } from "../commons/logedPageComponent";
import { ProfileForm } from "./profileForm";

export function ProfilePageIndex() {
  return (
    <LogedContainer>
      <Title>Complete seu perfil</Title>
      <ProfileForm />
    </LogedContainer>
  )
}

