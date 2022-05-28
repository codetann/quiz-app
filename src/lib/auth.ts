import { supabase } from "./supabase";

const loginUser = async (email: string, password: string) => {
  const res = await supabase.auth.signIn({ email, password });

  if (res.error) throw new Error(res.error.message);

  return res.user;
};

const signUpUser = async (email: string, password: string) => {
  const res = await supabase.auth.signUp({ email, password });

  if (res.error) throw new Error(res.error.message);

  return res.user;
};

export const auth = {
  loginUser,
  signUpUser,
};
