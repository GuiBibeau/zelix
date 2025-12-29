"use client";

import { Copy, ExternalLink, LogOut } from "lucide-react";
import {
	Dialog,
	DialogBody,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@repo/ui/dialog";

interface WalletConnectedModalProps {
	isOpen: boolean;
	onOpenChange: (open: boolean) => void;
}

export function WalletConnectedModal({
	isOpen,
	onOpenChange,
}: WalletConnectedModalProps) {
	return (
		<Dialog open={isOpen} onOpenChange={onOpenChange}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>WALLET</DialogTitle>
				</DialogHeader>

				<DialogBody className="space-y-6">
					<div className="border-2 border-black dark:border-white p-4">
						<div className="text-xs text-muted-foreground mb-2">ADDRESS</div>
						<div className="flex items-center justify-between">
							<span className="font-mono font-bold">address here</span>
							<button type="button" className="hover:bg-muted p-1">
								<Copy className="w-4 h-4" />
							</button>
						</div>
					</div>

					<div className="border-2 border-black dark:border-white p-4">
						<div className="text-xs text-muted-foreground mb-2">BALANCE</div>
						<div className="text-2xl font-bold font-mono">TODO</div>
						<div className="text-xs text-muted-foreground mt-1">≈ todo USD</div>
					</div>

					<div className="grid grid-cols-2 gap-3">
						<button
							type="button"
							className="border-2 border-black dark:border-white p-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
						>
							<ExternalLink className="w-5 h-5 mx-auto mb-1" />
							<span className="text-xs font-bold">VIEW ON EXPLORER</span>
						</button>
						<button
							type="button"
							className="border-2 border-black dark:border-white p-3 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive transition-colors"
						>
							<LogOut className="w-5 h-5 mx-auto mb-1" />
							<span className="text-xs font-bold">DISCONNECT</span>
						</button>
					</div>
				</DialogBody>
			</DialogContent>
		</Dialog>
	);
}
