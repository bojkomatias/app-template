import React from "react";
import ReactDOM from "react-dom/client";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import "./styles.css";
import { routeTree } from "./routeTree.gen";
import {
  QueryClient,
  QueryClientProvider,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { sessionQueryOptions } from "./lib/query/session";

// Set up a Router instance
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  context: { session: null },
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

document.querySelector("html")!.classList.add("dark");

const rootEl = document.getElementById("root");
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>,
  );
}

function App() {
  const { data } = useSuspenseQuery(sessionQueryOptions);
  return <RouterProvider router={router} context={data} />;
}
