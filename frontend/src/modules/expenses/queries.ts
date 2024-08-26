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

export const expenseByIdQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["expenses", { id }],
    queryFn: async () => {
      const res = await api.expenses[":id"].$get({ param: { id } });
      if (res.status === 404) throw new Error(await res.text());
      return await res.json();
    },
  });
