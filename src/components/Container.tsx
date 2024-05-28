import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { ClassNameValue } from "tailwind-merge";

export interface ContainerProps {
  children: ReactNode;
  className?: ClassNameValue;
}

export default function Container(props: ContainerProps) {
  return (
    <div
      className={cn(
        "min-w-full flex flex-col border-slate-700 border rounded-lg p-6",
        props.className,
      )}
    >
      {props.children}
    </div>
  );
}
