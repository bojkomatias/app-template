import { Button } from "@/components/button";
import { ArrowPathIcon } from "@heroicons/react/20/solid";

export function FormButton({
  canSubmit,
  isSubmitting,
  text,
}: {
  canSubmit: boolean;
  isSubmitting: boolean;
  text: string;
}) {
  return (
    <div className="mt-4 flex justify-end">
      <Button className="relative" type="submit" disabled={!canSubmit}>
        <span className={isSubmitting ? "invisible" : ""}>{text}</span>
        {isSubmitting ? (
          <ArrowPathIcon
            data-slot="icon"
            className="absolute z-10 animate-spin"
          />
        ) : null}
      </Button>
    </div>
  );
}
