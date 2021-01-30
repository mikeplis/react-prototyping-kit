import React from "react";
import { Image as BaseImage, ImageProps } from "@chakra-ui/react";

type Props = Pick<ImageProps, "src" | "height" | "width">;

export const Image = (props: Props) => {
    return <BaseImage {...props} />;
};
