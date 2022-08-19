import { useEffect } from "react";
import create from "zustand";
import { Toast } from "@components";

interface Toast {
  message: string;
  type: "success" | "error";
}

interface StoreProps {
  toast: Toast | null;
  setToast: (toast: Toast | null) => void;
  clearToast: () => void;
}

// internal store to control toasts
const useStore = create<StoreProps>((set) => ({
  toast: null as Toast | null,
  setToast: (toast: Toast | null) => set((state) => ({ ...state, toast })),
  clearToast: () => set((state) => ({ ...state, toast: null })),
}));

// toast hook to envoke toast message
export const useToast = () => {
  const { setToast } = useStore();
  return (options: Toast) => {
    setToast(options);
  };
};

// global toast component to display toast message
export const ToastProvider = ({ children }: any) => {
  const { toast, clearToast } = useStore();

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        clearToast();
      }, 3000);
    }
  }, [toast]);

  return (
    <>
      {toast && <Toast type={toast.type}>{toast.message}</Toast>}
      {children}
    </>
  );
};
