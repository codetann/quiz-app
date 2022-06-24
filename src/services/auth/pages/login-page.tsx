import { useNavigate } from "react-router-dom";
import {
  Text,
  Checkbox,
  Heading,
  HStack,
  Spacer,
  VStack,
} from "@chakra-ui/react";
import { useAuth, useForm } from "@hooks";
import { FormInput, FormButton } from "@components";
import { PageTransition } from "src/animations";

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
    <PageTransition>
      <VStack h="100vh" justify="center" align="center">
        <Heading fontSize="46px" pb={10}>
          Login
        </Heading>
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
            <HStack w="100%" py={3}>
              <Checkbox colorScheme="purple" />
              <Spacer />
              <Text fontSize="14px">Remember me</Text>
            </HStack>
            <HStack w="100%" spacing={4}>
              <FormButton disabled={!form.isValid} type="submit" w="100%">
                Login
              </FormButton>
              <FormButton variant="ghost" px={3}>
                Guest
              </FormButton>
            </HStack>
          </VStack>
        </form>
        <HStack fontSize="14px" p={6}>
          <Text>Don't have an account?</Text>
          <Text
            cursor="pointer"
            color="_.primary.dark"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Text>
        </HStack>
      </VStack>
    </PageTransition>
  );
};

export { Login };
