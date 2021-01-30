import React from "react";

type Props = Pick<React.HTMLProps<HTMLFormElement>, "onSubmit" | "children">;

export const Form = (props: Props) => {
    return <form {...props} />;
};
