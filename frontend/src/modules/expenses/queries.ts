import { api } from "@/lib/rpc-client";
import { infiniteQueryOptions, queryOptions } from "@tanstack/react-query";

export const expensesInfiniteQueryOptions = infiniteQueryOptions({
  queryKey: ["expenses"],
  queryFn: async ({ pageParam }) => {
    const res = await api.expenses.$get({ query: { page: pageParam } });
    return await res.json();
  },
  initialPageParam: 0,
  getNextPageParam: (lastPage) => lastPage.nextPage,
});
