import { useAuth } from "@hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useLoginController = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const _resetState = () => {
    setEmail("");
    setPassword("");
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { error } = await login(email, password);

    if (!error) navigate("/dashboard");

    _resetState();
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const navigateTo = (path: string) => {
    navigate(path);
  };

  const isDisabled = !email || !password;

  return {
    onSubmit,
    onEmailChange,
    onPasswordChange,
    isDisabled,
    email,
    password,
    navigateTo,
  };
};

export { useLoginController };
