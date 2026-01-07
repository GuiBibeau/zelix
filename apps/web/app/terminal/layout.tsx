"use client";

import { useState } from "react";
import { UnifiedNavbar } from "@/components";
import { WalletConnectModal } from "@/components/modal";
import { useWalletConnection } from "@solana/react-hooks";

export default function TerminalLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const { connected } = useWalletConnection();
	const [showWalletModal, setShowWalletModal] = useState(false);

	return (
		<div className="min-h-screen bg-background">
			<UnifiedNavbar onWalletClick={() => setShowWalletModal(true)} />

			<main className="container mx-auto p-4">{children}</main>

			<WalletConnectModal
				isOpen={showWalletModal && !connected}
				onOpenChange={setShowWalletModal}
			/>
		</div>
	);
}
