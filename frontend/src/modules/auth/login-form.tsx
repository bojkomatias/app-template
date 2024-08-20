import { FormInput } from "@/shared/form-input";
import { useForm } from "@tanstack/react-form";
import { zodValidator } from "@tanstack/zod-form-adapter";
import { credentialsSchema } from "@server/db/schema";
import { FieldGroup, Fieldset, Legend } from "@/components/fieldset";
import { FormButton } from "@/shared/form/form-button";
import { api } from "@/lib/rpc-client";
import { redirect } from "@tanstack/react-router";

export function LoginForm() {
  const form = useForm({
    defaultValues: { email: "", password: "" },
    onSubmit: async ({ value }) => {
      const res = await api.login.$post({ json: value });

      if (res.status === 200) {
        console.log(res);

        return redirect({ to: "/app" });
      }
    },
    validatorAdapter: zodValidator(),
  });
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        form.handleSubmit();
      }}
    >
      <Fieldset>
        <Legend>Login</Legend>
        <FieldGroup>
          <form.Field
            name="email"
            validators={{ onSubmit: credentialsSchema.shape.email }}
            children={(field) => <FormInput field={field} />}
          />

          <form.Field
            name="password"
            validators={{
              onSubmit: credentialsSchema.shape.password,
            }}
            children={(field) => <FormInput type="password" field={field} />}
          />
        </FieldGroup>
      </Fieldset>
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit, isSubmitting]) => (
          <FormButton
            text="Login"
            canSubmit={canSubmit}
            isSubmitting={isSubmitting}
          />
        )}
      />
    </form>
  );
}
