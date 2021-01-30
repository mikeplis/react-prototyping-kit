import React from "react";
import { Select as BaseSelect, SelectProps } from "@chakra-ui/react";

type Props = Pick<SelectProps, "children" | "placeholder" | "name">;

export const Select = React.forwardRef<HTMLSelectElement, Props>((props: Props, ref) => {
    return <BaseSelect {...props} ref={ref} />;
});
