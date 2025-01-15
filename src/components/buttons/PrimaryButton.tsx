import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

export default function PrimaryButton({ children, type }: PrimaryButtonProps) {
  return (
    <button className="text-yellow-300 text-sm md:text-2xl flex w-full border px-4 py-2 rounded-lg"  type={type}>
      {children}
    </button>
  );
}
