import type { User } from "@supabase/supabase-js";

export interface State {
  user: User | null;
  setUser: (user: User) => void;
}
