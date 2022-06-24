import { auth } from "@lib";
import { userStore } from "@store";
import { useToast } from "@chakra-ui/react";

const useAuth = () => {
  const { user, setUser } = userStore();
  const toast = useToast();

  const login = async (email: string, password: string) => {
    try {
      const user = await auth.loginUser(email, password);
      setUser(user!);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        status: "error",
        position: "top-right",
        isClosable: true,
      });
      return { error: true };
    }

    return { error: false };
  };

  const signUp = async (email: string, password: string) => {
    try {
      const user = await auth.signUpUser(email, password);
      setUser(user!);
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
      });
      return { error: true };
    }
    return { error: false };
  };

  return {
    user,
    login,
    signUp,
  };
};

export { useAuth };
