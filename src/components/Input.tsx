import React from "react";
import { Input as BaseInput, InputProps } from "@chakra-ui/react";

type Props = Pick<InputProps, "placeholder" | "name">;

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
    return <BaseInput {...props} ref={ref} />;
});
