import { useEffect, useState } from "react";

const useForm = (initialState: any) => {
  const [data, setData] = useState(initialState);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(Object.keys(data).every((key) => data[key]));
  }, [data]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const reset = () => {
    setData(initialState);
  };

  return {
    data,
    handleChange,
    isValid,
    reset,
  };
};

export { useForm };
