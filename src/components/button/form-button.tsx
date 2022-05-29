import { ButtonProps, chakra } from "@chakra-ui/react";

const FormButton = (props: ButtonProps) => {
  return <chakra.button className="form-button" {...props} />;
};

export { FormButton };
