import { Button } from "@/components/button";
import { Divider } from "@/components/divider";
import {
  Description,
  Field,
  FieldGroup,
  Fieldset,
  Label,
  Legend,
} from "@/components/fieldset";
import { Input } from "@/components/input";
import { Text } from "@/components/text";
import { useState } from "react";

export function SignIn() {
  return (
    <div className="mx-auto mt-24 max-w-lg rounded-xl bg-white p-10 shadow dark:bg-zinc-900 dark:shadow-zinc-200/10">
      <Fieldset disabled>
        <Legend>Sign in</Legend>
        <Text>For now you can only sign in with github provider.</Text>
        <FieldGroup>
          <Field>
            <Label>Username</Label>
            <Input name="username" />
          </Field>
          <Field>
            <Label>Password</Label>
            <Input name="password" />
          </Field>
        </FieldGroup>
      </Fieldset>
      <div className="my-8 flex items-center gap-2">
        <Divider />
        <Text>Or</Text>
        <Divider />
      </div>
      <Button href="/api/auth/github" color="white" className="w-full">
        <img src="/github.svg" className="size-5" /> Continue with GitHub
      </Button>
    </div>
  );
}
