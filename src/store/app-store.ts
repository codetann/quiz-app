import create from "zustand";
import type { StoreState } from "@types";
import type { User } from "@supabase/supabase-js";

const appStore = create<StoreState>((set) => ({
  user: null,
  error: null,
  setUser: (user: User) => set((state) => ({ ...state, user })),
  setError: (error: string) => set((state) => ({ ...state, error })),
}));

export { appStore };
