"use client";
import * as React from "react";

import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: "copy";
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [open, setOpen] = React.useState<boolean>(false);
    if (props.variant && props.variant === "copy") {
      return (
        <div>
          <p className="font-medium">Email</p>
          <div
            className={cn(
              "flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
              className
            )}
          >
            <input
              type={type}
              className="border-none outline-none bg-white/0 "
              ref={ref}
              {...props}
            />
            <TooltipProvider>
              <Tooltip
                open={open}
                onOpenChange={() => {
                  setTimeout(() => setOpen(false), 1000);
                }}
              >
                <TooltipTrigger>
                  <Copy
                    onClick={() => {
                      setOpen(true);
                      navigator.clipboard.writeText("dominicnidy01@gmail.com");
                    }}
                    className="cursor-pointer"
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copied!</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      );
    }

    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
