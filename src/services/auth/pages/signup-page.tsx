import { VStack, HStack, Heading, useToast } from "@chakra-ui/react";
import { FormButton, FormInput } from "@components";
import { useForm } from "@hooks";
import { useAuth } from "@hooks";
import { useNavigate } from "react-router-dom";
import { PageTransition } from "src/animations";

const Signup = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const form = useForm({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { email, password } = form.data;
    const { error } = await signUp(email, password);

    if (!error) navigate("/dashboard");

    form.reset();
  };

  return (
    <PageTransition>
      <VStack h="100vh" justify="center" align="center">
        <Heading fontSize="46px" pb={10}>
          Sign Up
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
            <FormInput
              value={form.data.confirmPassword}
              onChange={form.handleChange}
              name="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              w="100%"
            />
            <FormButton disabled={!form.isValid} type="submit" w="100%">
              Sign Up
            </FormButton>
          </VStack>
        </form>
      </VStack>
    </PageTransition>
  );
};

export { Signup };
