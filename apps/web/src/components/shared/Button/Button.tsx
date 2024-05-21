import React from "react";
import { cn } from "@repo/utils";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  view?: "default" | "primary" | "secondary" | "error" | "success" | "warning";
  size?: "sm" | "md" | "lg";
};

export const Button = ({
  view = "default",
  size = "md",
  className,
  ...restProps
}: ButtonProps) => {
  const buttonClasses = cn(
    "transition-colors tracking-widest",
    {
      "bg-slate-600 text-white hover:bg-slate-500": view === "default",
      "bg-indigo-600 text-white hover:bg-indigo-500": view === "primary",
      "bg-gray-600 text-white hover:bg-gray-500": view === "secondary",
      "bg-red-600 text-white hover:bg-red-500": view === "error",
      "bg-green-600 text-white hover:bg-green-500": view === "success",
      "bg-yellow-600 text-white hover:bg-yellow-500": view === "warning",
      "text-sm px-4 py-2 rounded-lg": size === "sm",
      "text-base px-6 py-3 rounded-xl": size === "md",
      "text-lg px-8 py-4 rounded-2xl": size === "lg",
    },
    className,
  );

  return <button className={buttonClasses} {...restProps} />;
};
