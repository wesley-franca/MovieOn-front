import api from "./api";

export function SignIn(email, password) {
  const promise = api.post("/auth/sign-in", {email, password});
  return promise;
}
