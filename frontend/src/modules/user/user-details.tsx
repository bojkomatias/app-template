import { useSuspenseQuery } from "@tanstack/react-query";
import { currentUserQueryOptions } from "./queries";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/description-list";

export function UserDetails() {
  const { data } = useSuspenseQuery(currentUserQueryOptions);

  return (
    <DescriptionList>
      {Object.entries(data).map(([key, value]) => (
        <>
          <DescriptionTerm>{key}</DescriptionTerm>
          <DescriptionDetails>{value}</DescriptionDetails>
        </>
      ))}
    </DescriptionList>
  );
}
