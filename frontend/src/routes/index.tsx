import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/button";
import { CommandLineIcon } from "@heroicons/react/16/solid";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="p-6">
      <div className="flex justify-end">
        <Button to="/login" color="dark">
          <CommandLineIcon />
          Dashboard
        </Button>
      </div>
    </div>
  );
}
