import { cn } from "@/lib/utils";
import React from "react";

export const Sidebar = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] bg-blue-500 lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      Sidebar
    </div>
  );
};
