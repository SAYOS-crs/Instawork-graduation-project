// app/providers.tsx
"use client";

import { HeroUIProvider } from "@heroui/react";
import { SessionProvider } from "next-auth/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SessionProvider>
        <HeroUIProvider>{children}</HeroUIProvider>
      </SessionProvider>
    </>
  );
}
