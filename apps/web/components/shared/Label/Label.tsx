import { PropsWithChildren } from "react";
import { cn } from "@repo/utils";

type Props = {
  size?: "sm" | "md" | "lg";
  view?: "default" | "primary" | "secondary" | "error" | "success" | "warning";
  className?: string;
};

export const Label = ({
  children,
  view = "default",
  size = "md",
  className,
}: PropsWithChildren<Props>) => {
  const classNames = cn(
    "rounded-full inline-flex tracking-wider",
    {
      "bg-slate-600 text-slate-300": view === "default",
      "bg-indigo-600 text-white": view === "primary",
      "bg-gray-600 text-white": view === "secondary",
      "bg-red-600 text-white": view === "error",
      "bg-green-600 text-white": view === "success",
      "bg-yellow-600 text-white": view === "warning",
      "text-xs px-3 py-1": size === "sm",
      "text-sm px-4 py-2": size === "md",
      "text-base px-5 py-3": size === "lg",
    },
    className,
  );

  return <div className={classNames}>{children}</div>;
};
