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
}

export function WalletConnectModal({
	isOpen,
	onOpenChange,
}: WalletConnectModalProps) {
	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>SELECT WALLET</DialogTitle>
				</DialogHeader>

				<DialogBody className="space-y-3">
					<p className="text-muted-foreground text-center py-4">
						Wallet connectors will appear here
					</p>
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
