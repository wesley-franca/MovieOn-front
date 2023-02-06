import api from "./api";

export async function SignUp(email, password) {
  const result = await api.post("/users", {email, password});
  return result;
}

