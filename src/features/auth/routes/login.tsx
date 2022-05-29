import { useNavigate } from "react-router-dom";
import {
  Text,
  Checkbox,
  Heading,
  HStack,
  Spacer,
  useColorMode,
  VStack,
} from "@chakra-ui/react";
import { useAuth, useForm } from "@hooks";
import { FormInput, FormButton } from "@components";

const Login = () => {
  const form = useForm({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = form.data;
    const { error } = await login(email, password);

    if (!error) navigate("/dashboard");

    form.reset();
  };

  return (
    <VStack h="100vh" justify="center" align="center">
      <Heading p={6}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} w="sm">
          <FormInput
            value={form.data.email}
            onChange={form.handleChange}
            name="email"
            type="email"
            placeholder="Email"
            w="100%"
          />
          <FormInput
            value={form.data.password}
            onChange={form.handleChange}
            name="password"
            type="password"
            placeholder="Password"
            w="100%"
          />
          <HStack w="100%">
            <Checkbox colorScheme="purple" />
            <Spacer />
            <Text>Remember me</Text>
          </HStack>
          <FormButton disabled={!form.isValid} type="submit" w="100%">
            Login
          </FormButton>
        </VStack>
      </form>
    </VStack>
  );
};

export { Login };
