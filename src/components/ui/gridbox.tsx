import { cn } from "@/lib/utils";
import React from "react";

interface GridBackgroundDemoChild { children: React.ReactNode };

export function GridBackgroundDemo({ children }: GridBackgroundDemoChild) {
  return (
    <div className="flex w-full justify-center items-center bg-white dark:bg-black-100 flex-col">
      <div
        className={cn(
          "absolute inset-0 w-full h-full",
          "[background-size:10vw_10vw]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
        )}
      />

      <div className="flex z-20">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h1 className="uppercase tracking-widest text-2xl text-neutral-200 font-medium">Dynamic Web Magic with Next.JS</h1>
        </div>
      </div>
      { children }
    </div>
  );
}
