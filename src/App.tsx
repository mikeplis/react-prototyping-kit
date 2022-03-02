import React from "react";
import { Button, Form, Image, Input, Link, Select, Stack, Text, useForm } from "./components";

type FormData = {
    someInput: string;
    someSelect: string;
};

export default function App() {
    const { handleSubmit, register, watch, errors } = useForm<FormData>();

    console.log({ errors });

    const onSubmit = (x: FormData) => console.log(x);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                <Text>Hello world</Text>

                <Image
                    src="https://source.unsplash.com/random/400x300"
                    height="200px"
                    width="200px"
                />
                <Input
                    name="someInput"
                    placeholder="Some input..."
                    ref={register({ maxLength: 5 })}
                />
                <Link href="#">Link</Link>
                <Select
                    name="someSelect"
                    placeholder="Select option"
                    ref={register({ required: true })}
                >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </Select>
                <Button type="submit" onClick={() => console.log("Clicked")}>
                    Submit
                </Button>
            </Stack>
        </Form>
    );
}
