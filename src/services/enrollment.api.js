import api from "./api";

export async function PostEnrollment({
  name, lastName, instagram, whatsapp, biography, birthday, token
}) {
  const body = { name, lastName, instagram, whatsapp, biography, birthday }
  const result = await api.post("/enrollment", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    }});
  return result;
}
