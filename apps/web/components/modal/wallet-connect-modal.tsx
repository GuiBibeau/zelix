"use client";

import {
	Dialog,
	DialogBody,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "@repo/ui/dialog";
import { useWalletConnection } from "@solana/react-hooks";

interface WalletConnectModalProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
}

export function WalletConnectModal({
	isOpen,
	onOpenChange,
}: WalletConnectModalProps) {
	const { connectors, connect } = useWalletConnection();

	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>SELECT WALLET</DialogTitle>
				</DialogHeader>

				<DialogBody className="space-y-3">
					{connectors.map((connector) => (
						<button
							type="button"
							key={connector.id}
							onClick={() => {
								connect(connector.id);
								onOpenChange(false);
							}}
							className="w-full border-2 border-black dark:border-white p-4 flex items-center justify-between hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors group"
						>
							<span className="font-bold">{connector.name}</span>
							<span className="text-xs text-muted-foreground group-hover:text-inherit">
								<img width={25} src={connector.icon} alt={connector.name} />
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
