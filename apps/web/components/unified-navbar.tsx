"use client";

import { useWalletConnection } from "@solana/react-hooks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Wallet, ChevronDown } from "lucide-react";
import { ConnectButtonSkeleton } from "./ui/connect-button-skeleton";
import { WalletDropdown } from "./wallet-dropdown";

const buttonStyles =
	"border-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black text-sm font-bold uppercase hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] h-[42px]";

function shortenAddress(address: string): string {
	return `${address.slice(0, 4)}...${address.slice(-4)}`;
}

function ConnectButton({ onClick }: { onClick?: () => void }) {
	const { connected, isReady, wallet } = useWalletConnection();
	const address = wallet?.account.address.toString() ?? "";

	const button = (
		<div className="relative h-[42px]">
			<AnimatePresence mode="wait">
				{!isReady ? (
					<ConnectButtonSkeleton key="skeleton" />
				) : (
					<motion.button
						key="button"
						type="button"
						onClick={connected ? undefined : onClick}
						className={`${buttonStyles} ${connected ? "px-3" : "w-[140px]"}`}
						initial={{ opacity: 0, filter: "blur(4px)" }}
						animate={{ opacity: 1, filter: "blur(0px)" }}
						transition={{
							duration: 0.3,
							ease: [0.25, 0.1, 0.25, 1],
						}}
					>
						{connected ? (
							<span className="flex items-center gap-2">
								<Wallet className="w-4 h-4" />
								<span className="font-mono normal-case">{shortenAddress(address)}</span>
								<ChevronDown className="w-4 h-4" />
							</span>
						) : (
							"CONNECT"
						)}
					</motion.button>
				)}
			</AnimatePresence>
		</div>
	);

	if (connected && isReady) {
		return <WalletDropdown>{button}</WalletDropdown>;
	}

	return button;
}

function ZelixLogo({ className }: { className?: string }) {
	return (
		<svg
			width="32"
			height="32"
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			role="img"
			aria-labelledby="zelix-logo-title"
		>
			<title id="zelix-logo-title">Zelix</title>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M5 5H27V9H13.5L27 23V27H5V23H18.5L5 9V5Z"
				fill="currentColor"
			/>
		</svg>
	);
}

interface UnifiedNavbarProps {
	onWalletClick?: () => void;
}

export function UnifiedNavbar({ onWalletClick }: UnifiedNavbarProps) {
	const pathname = usePathname();
	const isTerminal = pathname.startsWith("/terminal");

	return (
		<nav className="border-b-4 border-black dark:border-white bg-white dark:bg-black sticky top-0 z-50">
			<div className="container mx-auto flex items-center justify-between px-4 py-4">
				<div className="flex items-center gap-6">
					<Link href="/" className="flex items-center gap-2 group">
						<div className="w-10 h-10 bg-black dark:bg-white flex items-center justify-center transition-transform group-hover:scale-110">
							<ZelixLogo className="w-6 h-6 text-white dark:text-black" />
						</div>
						<span className="text-2xl font-bold uppercase tracking-tighter">
							ZELIX
						</span>
					</Link>

					{isTerminal && (
						<div className="hidden md:flex items-center gap-1 text-xs border-l-4 border-black dark:border-white pl-6">
							<span className="px-3 py-2 bg-black dark:bg-white text-white dark:text-black font-bold">
								TRADE
							</span>
							<span className="px-3 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer font-bold transition-colors">
								PORTFOLIO
							</span>
							<span className="px-3 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer font-bold transition-colors">
								MARKETS
							</span>
							<span className="px-3 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black cursor-pointer font-bold transition-colors">
								ANALYTICS
							</span>
						</div>
					)}

					{!isTerminal && (
						<div className="hidden md:flex items-center gap-1 text-sm font-bold">
							<a
								href="#features"
								className="px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
							>
								FEATURES
							</a>
							<a
								href="#performance"
								className="px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
							>
								PERFORMANCE
							</a>
							<a
								href="#sdk"
								className="px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
							>
								SDK
							</a>
						</div>
					)}
				</div>

				<div className="flex items-center gap-3">
					{isTerminal && (
						<div className="hidden lg:flex items-center gap-2 text-xs border-2 border-black dark:border-white px-3 py-2 font-mono">
							<div className="w-2 h-2 bg-green-500 animate-pulse" />
							<span className="font-bold">ONLINE</span>
							<span className="text-muted-foreground">|</span>
							<span>LAT: 12ms</span>
						</div>
					)}

					{!isTerminal && (
						<>
							<button
								type="button"
								className="hidden sm:block border-2 border-black dark:border-white px-5 py-2 text-sm font-bold uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)]"
							>
								DOCS
							</button>
							<Link
								href="/terminal"
								className="border-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black px-6 py-2 text-sm font-bold uppercase hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
							>
								LAUNCH TERMINAL
							</Link>
						</>
					)}

					{isTerminal && <ConnectButton onClick={onWalletClick} />}
				</div>
			</div>
		</nav>
	);
}
