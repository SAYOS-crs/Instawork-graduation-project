// app/providers.tsx
"use client";

import { HeroUIProvider } from "@heroui/react";
import { SessionProvider } from "next-auth/react";
import { ToastProvider } from "@heroui/toast";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SessionProvider>
        <HeroUIProvider>
          <ToastProvider />
          {children}
        </HeroUIProvider>
      </SessionProvider>
    </>
  );
}
