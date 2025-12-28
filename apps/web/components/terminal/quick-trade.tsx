"use client";

import { ArrowDownUp } from "lucide-react";
import { useState } from "react";

export function QuickTrade() {
	const [fromAmount, setFromAmount] = useState("");
	const [toAmount, setToAmount] = useState("");

	return (
		<div className="border-4 border-black dark:border-white bg-white dark:bg-black">
			<div className="border-b-2 border-black dark:border-white px-4 py-2 bg-black dark:bg-white text-white dark:text-black">
				<span className="text-xs font-bold">QUICK TRADE</span>
			</div>
			<div className="p-4 space-y-4">
				<div className="border-2 border-black dark:border-white p-4">
					<div className="flex justify-between items-center mb-2">
						<span className="text-xs font-bold">FROM</span>
						<span className="text-xs text-muted-foreground">
							BALANCE: 2.45 ETH
						</span>
					</div>
					<div className="flex items-center gap-2">
						<input
							type="text"
							value={fromAmount}
							onChange={(e) => setFromAmount(e.target.value)}
							placeholder="0.00"
							className="flex-1 bg-transparent text-2xl font-bold font-mono outline-none"
						/>
						<button
							type="button"
							className="border-2 border-black dark:border-white px-4 py-2 font-bold text-sm hover:bg-muted"
						>
							ETH
						</button>
					</div>
				</div>

				<div className="flex justify-center -my-2 relative z-10">
					<button
						type="button"
						className="border-2 border-black dark:border-white bg-white dark:bg-black p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
					>
						<ArrowDownUp className="w-5 h-5" />
					</button>
				</div>

				<div className="border-2 border-black dark:border-white p-4">
					<div className="flex justify-between items-center mb-2">
						<span className="text-xs font-bold">TO</span>
						<span className="text-xs text-muted-foreground">
							BALANCE: 0.00 USDC
						</span>
					</div>
					<div className="flex items-center gap-2">
						<input
							type="text"
							value={toAmount}
							onChange={(e) => setToAmount(e.target.value)}
							placeholder="0.00"
							className="flex-1 bg-transparent text-2xl font-bold font-mono outline-none"
						/>
						<button
							type="button"
							className="border-2 border-black dark:border-white px-4 py-2 font-bold text-sm hover:bg-muted"
						>
							USDC
						</button>
					</div>
				</div>

				<div className="border-2 border-black dark:border-white p-3 text-xs space-y-1">
					<div className="flex justify-between">
						<span className="text-muted-foreground">RATE</span>
						<span className="font-mono font-bold">1 ETH = 3,842.56 USDC</span>
					</div>
					<div className="flex justify-between">
						<span className="text-muted-foreground">FEE</span>
						<span className="font-mono font-bold">0.3% (11.52 USDC)</span>
					</div>
					<div className="flex justify-between">
						<span className="text-muted-foreground">SLIPPAGE</span>
						<span className="font-mono font-bold">0.5%</span>
					</div>
				</div>

				<button
					type="button"
					className="w-full border-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black py-4 text-sm font-bold uppercase hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors"
				>
					EXECUTE TRADE
				</button>
			</div>
		</div>
	);
}
