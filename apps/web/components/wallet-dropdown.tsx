"use client";

import { useState } from "react";
import Link from "next/link";
import { Copy, Check, User, Settings, LogOut } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@repo/ui/popover";
import { useWalletConnection } from "@solana/react-hooks";

function shortenAddress(address: string): string {
	return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

interface WalletDropdownProps {
	children: React.ReactNode;
}

export function WalletDropdown({ children }: WalletDropdownProps) {
	const { wallet, disconnect } = useWalletConnection();
	const [copied, setCopied] = useState(false);
	const [open, setOpen] = useState(false);

	const address = wallet?.account.address.toString() ?? "";

	const handleCopy = async () => {
		if (!address) return;
		await navigator.clipboard.writeText(address);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const handleDisconnect = async () => {
		await disconnect();
		setOpen(false);
	};

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>{children}</PopoverTrigger>
			<PopoverContent align="end" className="w-64 p-0">
				<div className="border-b-2 border-black dark:border-white p-4">
					<div className="flex items-center justify-between">
						<span className="font-mono font-bold text-sm">
							{shortenAddress(address)}
						</span>
						<button
							type="button"
							onClick={handleCopy}
							className="p-1.5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
						>
							{copied ? (
								<Check className="w-4 h-4" />
							) : (
								<Copy className="w-4 h-4" />
							)}
						</button>
					</div>
				</div>

				<div className="py-2">
					<Link
						href="/terminal/accounts"
						onClick={() => setOpen(false)}
						className="flex items-center gap-3 px-4 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
					>
						<User className="w-4 h-4" />
						<span className="font-bold text-sm">ACCOUNTS</span>
					</Link>
					<Link
						href="/terminal/settings"
						onClick={() => setOpen(false)}
						className="flex items-center gap-3 px-4 py-3 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
					>
						<Settings className="w-4 h-4" />
						<span className="font-bold text-sm">SETTINGS</span>
					</Link>
				</div>

				<div className="border-t-2 border-black dark:border-white p-2">
					<button
						type="button"
						onClick={handleDisconnect}
						className="w-full flex items-center gap-3 px-4 py-3 hover:bg-destructive hover:text-destructive-foreground transition-colors"
					>
						<LogOut className="w-4 h-4" />
						<span className="font-bold text-sm">DISCONNECT</span>
					</button>
				</div>
			</PopoverContent>
		</Popover>
	);
}
