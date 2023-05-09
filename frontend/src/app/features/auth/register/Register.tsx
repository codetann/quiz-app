import { Layout } from "../components/Layout";
import { registerWithEmail } from "../api";
import { Button, Form, HStack, Input, Label, VStack } from "@components";
import { useFormState } from "@/app/hooks";

function Register() {
  const { state, handleChange } = useFormState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const isValid = Object.values(state).every((d) => d.length > 0);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (state.password !== state.confirmPassword) {
      return;
    }

    try {
      await registerWithEmail({
        first_name: state.firstName,
        last_name: state.lastName,
        email: state.email,
        password: state.password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <Form spacing={1} width="23rem" onSubmit={handleSubmit}>
        <HStack width="100%" spacing={1}>
          <VStack>
            <Label htmlFor="firstName">First Name</Label>
            <Input
              full
              required
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={state.firstName}
              onChange={handleChange}
            />
          </VStack>
          <VStack>
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              full
              required
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={state.lastName}
              onChange={handleChange}
            />
          </VStack>
        </HStack>
        <VStack>
          <Label htmlFor="email">Email</Label>
          <Input
            full
            required
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
          />
        </VStack>
        <VStack>
          <Label htmlFor="password">Password</Label>
          <Input
            full
            required
            id="password"
            name="password"
            type="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
          />
        </VStack>
        <VStack>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input
            full
            required
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            value={state.confirmPassword}
            onChange={handleChange}
          />
        </VStack>
        <Button primary full type="submit" disabled={!isValid}>
          Register
        </Button>
      </Form>
    </Layout>
  );
}

export { Register };
