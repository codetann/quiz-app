import { supabase } from "./supabase";

export const loginWithEmail = async (email: string, password: string) => {
  const { user, error } = await supabase.auth.signIn({ email, password });

  if (error) throw new Error(error.message);

  return user;
};

export const registerWithEmail = async (email: string, password: string) => {
  const { user, error } = await supabase.auth.signUp({ email, password });

  if (error) throw new Error(error.message);

  return user;
};
