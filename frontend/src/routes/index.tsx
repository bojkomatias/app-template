import { createFileRoute } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import { sessionQueryOptions } from "@/lib/query/session";
import { Button } from "@/components/button";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { data } = useSuspenseQuery(sessionQueryOptions);
  return (
    <div className="mx-auto mt-48 max-w-sm">
      <h3>Welcome Home!</h3>
      {data.session ? (
        <Button to="/app">Go to dashboard</Button>
      ) : (
        <Button href="/api/auth/github">Login with Github</Button>
      )}
    </div>
  );
}
