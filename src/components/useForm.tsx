import {
    useForm as useBaseForm,
    UseFormMethods,
    UseFormOptions,
    FieldValues,
} from "react-hook-form";

export function useForm<TFieldValues extends FieldValues = FieldValues>(
    inputs?: Pick<UseFormOptions<TFieldValues, object>, "defaultValues">
): Pick<UseFormMethods<TFieldValues>, "register" | "handleSubmit" | "watch" | "errors"> {
    return useBaseForm(inputs);
}
