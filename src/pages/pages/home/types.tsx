import { cn } from "@/lib/utils";
import { types } from "@/utils/types-colors";

interface TypesProps {
  name: keyof typeof types;
}

export function Types({ name }: TypesProps) {
  return (
    <div className={cn(types[name], "rounded-md px-2 py-0.5")}>
      <span className="font-semibold text-muted">{name}</span>
    </div>
  );
}
