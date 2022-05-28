import create from "zustand";
import type { User } from "@supabase/supabase-js";
import type { State } from "./type";

const userStore = create<State>((set) => ({
  user: null,
  setUser: (user: User) => set((state) => ({ ...state, user })),
}));

export { userStore };
