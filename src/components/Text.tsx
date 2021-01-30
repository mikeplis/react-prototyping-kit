import React from "react";
import { Text as BaseText, TextProps } from "@chakra-ui/react";

type Props = Pick<TextProps, "children">;

export const Text = (props: Props) => {
    return <BaseText {...props} />;
};
