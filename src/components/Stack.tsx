import React from "react";
import { Stack as BaseStack, StackProps } from "@chakra-ui/react";

type Props = Pick<StackProps, "children">;

export const Stack = (props: Props) => {
    return <BaseStack {...props} />;
};
