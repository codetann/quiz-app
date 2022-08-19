import { Layout } from "../components/Layout";
import { Button } from "@components";

function Login() {
  return (
    <Layout>
      <h1 style={{ color: "red" }}>Login</h1>
      <Button secondary>Login</Button>
      <Button primary>Login</Button>
      <Button outline>Login</Button>
    </Layout>
  );
}

export { Login };
