import { useToast } from "@chakra-ui/react";
import { useAuth } from "@hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../api";

const useLoginController = () => {
  const navigate = useNavigate();
  const login = useLogin();
  const toast = useToast();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await login(email, password);

      navigate("/");
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 5000,
      })
    }
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
