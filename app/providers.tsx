"use client";

import { queryClient } from "@/shared/api";
import { QueryClientProvider } from "@tanstack/react-query";

type ProvidersProps = { children: React.ReactNode };

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
