export interface StoreState {
  user: User | null;
  error: string | null;
  setError: (error: string) => void;
  setUser: (user: User) => void;
}
