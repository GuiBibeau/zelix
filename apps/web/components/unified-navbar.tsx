"use client";

import { Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface UnifiedNavbarProps {
	onConnectWallet?: () => void;
	isConnected?: boolean;
}

export function UnifiedNavbar({
	onConnectWallet,
	isConnected,
}: UnifiedNavbarProps) {
	const pathname = usePathname();
	const isTerminal = pathname === "/terminal";

	return (
		<nav className="border-b-4 border-black dark:border-white bg-white dark:bg-black sticky top-0 z-50">
			<div className="container mx-auto flex items-center justify-between px-4 py-4">
				<div className="flex items-center gap-6">
					<Link href="/" className="flex items-center gap-2 group">
						<div className="w-10 h-10 bg-black dark:bg-white flex items-center justify-center transition-transform group-hover:scale-110">
							<Zap className="w-6 h-6 text-white dark:text-black" />
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

					{isTerminal && (
						<button
							type="button"
							onClick={onConnectWallet}
							className="border-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black px-6 py-2 text-sm font-bold uppercase hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)]"
						>
							{isConnected ? "0x7a...4f2c" : "CONNECT"}
						</button>
					)}
				</div>
			</div>
		</nav>
	);
}
