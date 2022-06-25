import { appStore } from "src/store/app-store";
import { supabase } from "@lib";

export const useLogin = () => {
  const { setUser, setError } = appStore();

  const login = async (email: string, password: string) => {
    const { user, error } = await supabase.auth.signIn({ email, password });

    if (error) throw new Error(error.message);
    if (user) setUser(user);
  };

  return login;
};

export const useSignUp = () => {
  const { setUser, setError } = appStore();

  const signUp = async (email: string, password: string) => {
    const { user, error } = await supabase.auth.signUp({ email, password });

    error && setError(error.message);
    user && setUser(user);
  };

  return signUp;
};
