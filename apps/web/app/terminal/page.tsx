"use client";

import { useState } from "react";
import { UnifiedNavbar } from "@/components";
import { WalletConnectModal, WalletConnectedModal } from "@/components/modal";

export default function TradingTerminal() {
	const [isConnected, setIsConnected] = useState(false);
	const [showConnectModal, setShowConnectModal] = useState(false);
	const [showConnectedModal, setShowConnectedModal] = useState(false);

	const handleConnectWallet = () => {
		if (isConnected) {
			setShowConnectedModal(true);
		} else {
			setShowConnectModal(true);
		}
	};

	const handleSelectWallet = (wallet: string) => {
		console.log("[v0] Selected wallet:", wallet);
		setIsConnected(true);
	};

	const handleDisconnect = () => {
		setIsConnected(false);
		setShowConnectedModal(false);
	};

	return (
		<div className="min-h-screen bg-background">
			<UnifiedNavbar
				onConnectWallet={handleConnectWallet}
				isConnected={isConnected}
			/>

			<main className="container mx-auto p-4" />

			<WalletConnectModal
				isOpen={showConnectModal}
				onOpenChange={setShowConnectModal}
				onSelectWallet={handleSelectWallet}
			/>

			<WalletConnectedModal
				isOpen={showConnectedModal}
				onOpenChange={setShowConnectedModal}
				onDisconnect={handleDisconnect}
			/>
		</div>
	);
}
