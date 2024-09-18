import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

import {
  Dialog,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Separator } from "./ui/separator";
import Image from "./Image";

type CardProps = {
  title: string;
  img: string;
  description: string;
  height: number;
  weight: number;
  abilities: string[];
  type?: string;
  weekness: string[];
  evolution: { id: number; name: string }[];
};

const PokemonCards = ({
  title,
  img,
  description,
  abilities,
  evolution,
  height,
  type,
  weekness,
  weight,
}: CardProps) => {
  return (
    <>
      <Dialog>
        <DialogTrigger>
          <Card className="rounded-[0.40rem] hover:border hover:border-foreground">
            <CardHeader>
              <CardTitle className="uppercase underline underline-offset-4">
                {title}
              </CardTitle>
              <CardDescription className="flex items-center justify-center">
                <Image src={img ?? "cover.png"} className="" />
              </CardDescription>
            </CardHeader>
            <CardContent className="">
              <p>{description}</p>
            </CardContent>
          </Card>
        </DialogTrigger>

        {/* Dialog content */}
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center text-2xl uppercase">
              {title}
            </DialogTitle>
            <Separator
              orientation="horizontal"
              className="w-full bg-gray-600"
            />
            <DialogDescription>
              <p>{description}</p>
              <div className="flex items-center justify-center">
                <Image src={img} />
              </div>
              <div className="my-2 flex items-center justify-evenly">
                <div className="space-y-8 capitalize">
                  <h2>height</h2>
                  <h2>weight</h2>
                  <h2>type</h2>
                  <h2>abilities</h2>
                  <h2>weekness</h2>
                  <h2>evolution</h2>
                </div>
                <div className="space-y-8">
                  <p>{height} ft</p>
                  <p>{weight} lbs</p>
                  <p>{type}</p>
                  <p>{abilities}</p>
                  <p>
                    {weekness.map((i) => {
                      return <p key={i}>{i}</p>;
                    })}
                  </p>
                  <p>
                    {evolution.map((i) => {
                      return <p key={i.id}>{i.name}</p>;
                    })}
                  </p>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default PokemonCards;
