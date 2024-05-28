"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

export type ShootCardProps = ComponentProps<typeof Card> & {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  locationUrl?: string;
  tags?: string[];
};

export default function ShootCard(props: ShootCardProps) {
  const { id, title, description, imageUrl, className, tags, ...rest } = props;

  return (
    <Card className={cn("flex flex-col justify-between", className)} {...rest}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {imageUrl && (
          <img
            className="border border-slate-500 rounded-lg w-full h-[400px] object-cover"
            src={imageUrl}
            alt={imageUrl}
          />
        )}
        {tags &&
          tags.length > 0 &&
          tags.map((tag) => {
            return (
              <p className="text-sm text-slate-500 font-semibold" key={tag}>
                #{tag}
              </p>
            );
          })}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/${id}`}>
          <Button className="font-bold">Access</Button>
        </Link>
        <Button className="bg-green-700 text-white font-bold">Clear</Button>
      </CardFooter>
    </Card>
  );
}
