"use client";

import { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as ShadToaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {children}
        <ShadToaster />
        <SonnerToaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
