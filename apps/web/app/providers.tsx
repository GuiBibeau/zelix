"use client";

import { ThemeProvider } from "next-themes";
import { autoDiscover, SolanaClientConfig } from "@solana/client";
import { SolanaProvider } from "@solana/react-hooks";

const config: SolanaClientConfig = {
  endpoint: process.env.NEXT_PUBLIC_SOLANA_RPC_ENDPOINT!,
  walletConnectors: autoDiscover(),
};

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SolanaProvider config={config} query={{ suspense: true }}>
        {children}
      </SolanaProvider>
    </ThemeProvider>
  );
}
