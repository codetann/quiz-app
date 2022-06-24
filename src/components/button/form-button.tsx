import { ButtonProps, chakra, useStyleConfig } from "@chakra-ui/react";

interface FormButtonProps extends ButtonProps {
  variant?: "ghost";
}

const FormButton = (props: FormButtonProps) => {
  const css = useStyleConfig("FormButton", { variant: props.variant });
  return <chakra.button __css={css} {...props} />;
};

export { FormButton };
