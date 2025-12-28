"use client";

import {
	Dialog,
	DialogBody,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@repo/ui/dialog";

interface WalletConnectModalProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
	onSelectWallet: (wallet: string) => void;
}

const wallets = [
	{ id: "metamask", name: "METAMASK", status: "AVAILABLE" },
	{ id: "coinbase", name: "COINBASE", status: "AVAILABLE" },
	{ id: "walletconnect", name: "WALLETCONNECT", status: "AVAILABLE" },
	{ id: "phantom", name: "PHANTOM", status: "AVAILABLE" },
];

export function WalletConnectModal({
	isOpen,
	onOpenChange,
	onSelectWallet,
}: WalletConnectModalProps) {
	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>SELECT WALLET</DialogTitle>
				</DialogHeader>

				<DialogBody className="space-y-3">
					{wallets.map((wallet) => (
						<button
							type="button"
							key={wallet.id}
							onClick={() => {
								onSelectWallet(wallet.id);
								onOpenChange(false);
							}}
							className="w-full border-2 border-black dark:border-white p-4 flex items-center justify-between hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors group"
						>
							<span className="font-bold">{wallet.name}</span>
							<span className="text-xs text-muted-foreground group-hover:text-inherit">
								{wallet.status}
							</span>
						</button>
					))}
				</DialogBody>

				<DialogFooter>
					<p className="text-xs text-muted-foreground">
						BY CONNECTING A WALLET, YOU AGREE TO THE TERMS OF SERVICE
					</p>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
