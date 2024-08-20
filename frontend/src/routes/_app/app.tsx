import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_app/app")({
	component: () => <div>Hello /_app/app!</div>,
});
