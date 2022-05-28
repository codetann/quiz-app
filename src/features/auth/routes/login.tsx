import { useNavigate } from "react-router-dom";
import { Button, VStack } from "@chakra-ui/react";
import { useAuth, useForm } from "@hooks";
import { FormInput } from "../components/form-input";

const Login = () => {
  const form = useForm({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = form.data;
    const { error } = await login(email, password);

    if (!error) navigate("/dashboard");
  };

  return (
    <VStack>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <FormInput
          value={form.data.email}
          onChange={form.handleChange}
          name="email"
          type="email"
          placeholder="Email"
        />
        <FormInput
          value={form.data.password}
          onChange={form.handleChange}
          name="password"
          type="password"
          placeholder="Password"
        />
        <Button disabled={!form.isValid} type="submit">
          Login
        </Button>
      </form>
    </VStack>
  );
};

export { Login };
