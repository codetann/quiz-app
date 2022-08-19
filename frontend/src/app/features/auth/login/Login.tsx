import { Layout } from "../components/Layout";
import { Button, Form, Input, Label, VStack } from "@components";
import { useState } from "react";
import { useToast } from "@providers";
import { loginWithEmail } from "../api";

function Login() {
  const toast = useToast();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const isValid = Object.values(data).every((d) => d);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { user, error } = await loginWithEmail(data.email, data.password);

    if (error) return toast({ message: error.message, type: "error" });

    toast({ message: "Login Successful", type: "success" });
  };

  return (
    <Layout>
      <Form spacing={2} width="23rem" onSubmit={handleSubmit}>
        <VStack spacing={1}>
          <VStack>
            <Label htmlFor="email">Email</Label>
            <Input
              full
              required
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={handleChange}
            />
          </VStack>
          <VStack>
            <Label htmlFor="email">Password</Label>
            <Input
              full
              required
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={handleChange}
            />
          </VStack>
        </VStack>
        <Button primary full disabled={!isValid} type="submit">
          Login
        </Button>
      </Form>
    </Layout>
  );
}

export { Login };
