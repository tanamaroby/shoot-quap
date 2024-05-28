import { cn } from "@/lib/utils";
import { ClassNameValue } from "tailwind-merge";

export interface TitleProps {
  text: string;
  className?: ClassNameValue;
}

export default function Title(props: TitleProps) {
  return (
    <p className={cn("text-lg font-semibold", props.className)}>{props.text}</p>
  );
}
