import { createFileRoute } from "@tanstack/react-router";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { sessionQueryOptions } from "@/lib/query/session";
import { Suspense } from "react";
import { Button } from "@/components/button";
import { api } from "@/lib/rpc-client";
import { Link } from "@/components/link";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  const { data } = useSuspenseQuery(sessionQueryOptions);
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      {data.session ? (
        <Button to="/app">Go to dashboard</Button>
      ) : (
        <Button href="/api/auth/github">Login with Github</Button>
      )}
    </div>
  );
}
