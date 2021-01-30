import React from "react";
import { Button as BaseButton, ButtonProps } from "@chakra-ui/react";

type Props = Pick<ButtonProps, "children" | "onClick" | "type">;

export const Button = (props: Props) => {
    return <BaseButton {...props} />;
};
