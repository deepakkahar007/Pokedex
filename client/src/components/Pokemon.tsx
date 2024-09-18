import { Button } from "./ui/button";
import { useState } from "react";
import PokemonCards from "./PokemonCards";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchData } from "@/lib/utils";
import Loading from "./Loading";

const Pokemon = () => {
  const pokemonCategory = ["all", "fire", "water", "air", "grass", "rock"];
  const [category, setCategory] = useState("all");

  const Query = useQueryClient();
  const { isLoading, data } = useQuery({
    queryKey: ["pokemon"],
    queryFn: () => fetchData(category),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: () => fetchData(category),
    onSuccess: () => Query.invalidateQueries(["pokemon"]),
  });

  const handleCateoryClick = (i: string) => {
    setCategory(i);
    mutate(i);
  };

  return (
    <div className="mx-4">
      <div className="my-3 flex items-center justify-center space-x-3">
        {pokemonCategory.map((i) => (
          <Button
            key={i}
            variant={category != i ? "secondary" : "default"}
            disabled={isPending}
            onClick={() => handleCateoryClick(i)}
            className="rounded-lg uppercase hover:border hover:border-white hover:bg-background hover:text-foreground"
          >
            {i}
          </Button>
        ))}
      </div>

      {isPending ? (
        <Loading />
      ) : isLoading ? (
        <Loading />
      ) : (
        <>
          {data.length === 0 ? (
            <div className="flex items-center justify-center">
              <h1 className="text-2xl">
                No pokemon found with {category} category
              </h1>
            </div>
          ) : (
            <div className="my-4 grid gap-4 sm:grid-cols-1 sm:gap-2 lg:grid-cols-3">
              {data.map((p: any) => {
                const {
                  id,
                  name,
                  image_url,
                  description,
                  height,
                  weight,
                  abilities,
                  type,
                  weekness,
                  evolution,
                } = p;
                return (
                  <PokemonCards
                    key={id}
                    title={name}
                    img={image_url}
                    description={description}
                    height={height}
                    weight={weight}
                    abilities={abilities}
                    type={type}
                    weekness={weekness}
                    evolution={evolution}
                  />
                );
              })}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Pokemon;
