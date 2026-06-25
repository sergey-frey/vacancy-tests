import type { ReactNode } from "react";
import { AuthProvider } from "@/features/auth";
import { ThemeProvider } from "@/features/theme-switcher";
import { WsMockClientProvider } from "@/shared/__mock__/WsMockClientContext";
import { RouterProvider } from "@/shared/routing";
import { TooltipProvider } from "@/shared/ui/tooltip";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <WsMockClientProvider>
          <TooltipProvider>
            <RouterProvider>{children}</RouterProvider>
          </TooltipProvider>
        </WsMockClientProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
