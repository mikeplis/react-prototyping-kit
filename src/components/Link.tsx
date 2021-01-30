import React from "react";
import { Link as BaseLink, LinkProps } from "@chakra-ui/react";

type Props = Pick<LinkProps, "children" | "href">;

export const Link = (props: Props) => {
    return <BaseLink {...props} />;
};
