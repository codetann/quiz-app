import { userStore } from "@store";
import { createContext, useContext } from "react";
import { useStore } from "zustand";

const ErrorContext = createContext<{
  error: Error | null;
}>({ error: null });

const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  const {error} = userStore()
}