import create from "zustand";
import type { User } from "@supabase/supabase-js";
import type { State } from "./type";

const userStore = create<State>((set) => ({
  user: null,
  error: null,
  setUser: (user: User) => set((state) => ({ ...state, user })),
  setError: (error: string) => set((state) => ({ ...state, error })),
}));

const useUserStore = () => {
  const state = userStore();
};

export { userStore };
