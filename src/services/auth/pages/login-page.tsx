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
import { useLoginController } from "../controllers/login-controller";

const Login = () => {
  // const form = useForm({ email: "", password: "" });
  // const navigate = useNavigate();
  // const { login } = useAuth();

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const { email, password } = form.data;
  //   const { error } = await login(email, password);

  //   if (!error) navigate("/dashboard");

  //   form.reset();
  // };
  const controller = useLoginController();

  return (
    <PageTransition>
      <VStack h="100vh" justify="center" align="center">
        <Heading fontSize="46px" pb={10}>
          Login
        </Heading>
        <form onSubmit={controller.onSubmit}>
          <VStack spacing={4} w="sm">
            <FormInput
              value={controller.email}
              onChange={controller.onEmailChange}
              name="email"
              type="email"
              placeholder="Email"
              w="100%"
            />
            <FormInput
              value={controller.password}
              onChange={controller.onPasswordChange}
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
              <FormButton
                disabled={controller.isDisabled}
                type="submit"
                w="100%"
              >
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
            onClick={() => controller.navigateTo("/signup")}
          >
            Sign Up
          </Text>
        </HStack>
      </VStack>
    </PageTransition>
  );
};

export { Login };
