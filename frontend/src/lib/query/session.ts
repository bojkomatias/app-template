import { queryOptions } from "@tanstack/react-query";
import { api } from "../rpc-client";

export const sessionQueryOptions = queryOptions({
  queryKey: ["session"],
  queryFn: async () => {
    const res = await api.session.$get();
    return await res.json();
  },
  staleTime: 1000 * 60 * 30,
});
