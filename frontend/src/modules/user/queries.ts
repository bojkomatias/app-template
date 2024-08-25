import { api } from "@/lib/rpc-client";
import { queryOptions } from "@tanstack/react-query";

export const sessionQueryOptions = queryOptions({
  queryKey: ["session"],
  queryFn: async () => {
    const res = await api.session.$get();
    return await res.json();
  },
  staleTime: 1000 * 60 * 60 * 24,
});

export const currentUserQueryOptions = queryOptions({
  queryKey: ["current-user"],
  queryFn: async () => {
    const res = await api["current-user"].$get();
    if (!res.ok) throw new Error("Server side error");
    return await res.json();
  },
  staleTime: 1000 * 60 * 60 * 24,
});
