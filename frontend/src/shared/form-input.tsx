import { Input, InputProps } from "@/components/input";
import { FieldApi } from "@tanstack/react-form";
import { fieldDictionary } from "@/i18n/field-dictionary";
import { Description, ErrorMessage, Field, Label } from "@/components/fieldset";

export function FormInput({
  field,
  disabled,
  ...props
}: { field: FieldApi<any, any, any, any> } & InputProps) {
  const hasErrors =
    field.state.meta.isTouched && !!field.state.meta.errors.length;

  return (
    <Field disabled={disabled}>
      <Label>{fieldDictionary[field.name]?.label}</Label>
      <Description>{fieldDictionary[field.name]?.description}</Description>
      <Input
        {...props}
        invalid={hasErrors}
        id={field.name}
        name={field.name}
        value={field.state.value}
        onBlur={field.handleBlur}
        onChange={(e) => field.handleChange(e.target.value)}
      />
      {hasErrors ? (
        <ErrorMessage>{field.state.meta.errors.join(",")}</ErrorMessage>
      ) : null}
    </Field>
  );
}
