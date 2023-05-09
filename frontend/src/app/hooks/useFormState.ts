import { useState } from "react";

export const useFormState = <T>(initialState: T) => {
  const [state, setState] = useState(initialState);

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  return { state, handleChange };
};
