import api from "./api";

export function SignUp(email, password) {
  const promise = api.post("/users", {email, password});
  return promise;
}

