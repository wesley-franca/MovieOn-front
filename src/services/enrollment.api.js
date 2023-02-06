import api from "./api";

export function PostEnrollment({
  name, lastName, instagram, whatsapp, biography, birthday, token
}) {
  const body = { name, lastName, instagram, whatsapp, biography, birthday }
  const promise = api.post("/enrollment", body, {
    headers: {
      Authorization: `Bearer ${token}`,
    }
  });
  return promise;
}

export function GetEnrollment(token) {
  const config = {
      headers: {
          "Authorization": `Bearer ${token}`,
      }
  };
  const promise = api.get("/enrollment", config );
  return promise;
}