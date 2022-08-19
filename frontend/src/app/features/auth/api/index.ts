import { api } from "src/lib";

const loginWithEmail = async (email: string, password: string) => {
  const response = await api.post("/users/login", {
    email,
    password,
  });

  return response.data;
};

interface RegisterWithEmailParams {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

const registerWithEmail = async (data: RegisterWithEmailParams) => {
  const response = await api.post("/users/register", data);

  return response.data;
};

export { loginWithEmail, registerWithEmail };
