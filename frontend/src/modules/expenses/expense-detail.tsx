import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/description-list";
import { useSuspenseQuery } from "@tanstack/react-query";
import { expenseByIdQueryOptions } from "./queries";

export function ExpenseDetail() {
  const { data } = useSuspenseQuery(expenseByIdQueryOptions("1"));
  return (
    <div className="col-span-1 h-fit rounded-lg border p-6">
      <DescriptionList>
        {Object.entries(data).map(([key, value]) => (
          <>
            <DescriptionTerm>{key}</DescriptionTerm>
            <DescriptionDetails>{value}</DescriptionDetails>
          </>
        ))}
      </DescriptionList>
    </div>
  );
}
