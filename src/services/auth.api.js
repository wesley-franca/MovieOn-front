import api from "./api";

export async function SignIn(email, password) {
  const result = await api.post("/auth/sign-in", {email, password});
  return result;
}
