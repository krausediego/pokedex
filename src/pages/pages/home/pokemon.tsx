import { getPokemon } from "@/services/get-pokemon";
import { useQuery } from "@tanstack/react-query";
import { Types } from "./types";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Details } from "./details";

interface PokemonProps {
  name: string;
}

export function Pokemon({ name }: PokemonProps) {
  const { data } = useQuery({
    queryFn: () => getPokemon({ name }),
    queryKey: [name],
  });

  const isMobile = useMediaQuery("(max-width: 480px)");

  return (
    <Sheet>
      <SheetTrigger>
        <div className="hover:shadow-lg group relative col-span-1 flex flex-col items-center justify-center gap-2 rounded-3xl bg-white px-4 pb-5 pt-8 shadow-poke transition-transform hover:-translate-y-1 hover:cursor-pointer hover:outline hover:outline-1 hover:outline-border">
          <img
            className="absolute -top-14 transition-transform duration-300 group-hover:scale-110"
            src={
              data?.sprites.versions["generation-v"]["black-white"]
                .front_default
            }
          />
          <p className="text-xs font-bold text-muted-foreground">
            N° {data?.id}
          </p>
          <p className="font-bold">
            {String(data?.name).charAt(0).toUpperCase() +
              String(data?.name).slice(1)}
          </p>
          <div className="flex gap-2">
            {data?.types?.map(({ type }, index) => (
              <Types key={index} {...type} />
            ))}
          </div>
        </div>
      </SheetTrigger>

      <SheetContent
        className="h-screen overflow-hidden p-0"
        side={isMobile ? "bottom" : "right"}
      >
        <Details name={name} />
      </SheetContent>
    </Sheet>
  );
}
