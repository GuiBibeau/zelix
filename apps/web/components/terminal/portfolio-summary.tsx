"use client";

import { TrendingDown, TrendingUp } from "lucide-react";

export function PortfolioSummary() {
	return (
		<div className="border-4 border-black dark:border-white bg-white dark:bg-black">
			<div className="border-b-2 border-black dark:border-white px-4 py-2 bg-black dark:bg-white text-white dark:text-black">
				<span className="text-xs font-bold">PORTFOLIO</span>
			</div>
			<div className="p-4">
				<div className="mb-6">
					<div className="text-xs text-muted-foreground mb-1">TOTAL VALUE</div>
					<div className="text-3xl font-bold font-mono tabular-nums">
						$24,567.89
					</div>
					<div className="flex items-center gap-2 mt-1">
						<TrendingUp className="w-4 h-4 text-success" />
						<span className="text-success font-bold">+$1,234.56 (5.29%)</span>
						<span className="text-xs text-muted-foreground">24H</span>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div className="border-2 border-black dark:border-white p-3">
						<div className="text-xs text-muted-foreground mb-1">
							BEST PERFORMER
						</div>
						<div className="font-bold">SOL</div>
						<div className="flex items-center gap-1 text-success text-sm font-bold">
							<TrendingUp className="w-3 h-3" />
							+5.67%
						</div>
					</div>
					<div className="border-2 border-black dark:border-white p-3">
						<div className="text-xs text-muted-foreground mb-1">
							WORST PERFORMER
						</div>
						<div className="font-bold">XRP</div>
						<div className="flex items-center gap-1 text-destructive text-sm font-bold">
							<TrendingDown className="w-3 h-3" />
							-3.45%
						</div>
					</div>
				</div>

				<div className="mt-4 border-2 border-black dark:border-white p-3">
					<div className="text-xs font-bold mb-2">ALLOCATION</div>
					<div className="space-y-2">
						{[
							{ symbol: "BTC", percentage: 45 },
							{ symbol: "ETH", percentage: 30 },
							{ symbol: "SOL", percentage: 15 },
							{ symbol: "OTHER", percentage: 10 },
						].map((asset) => (
							<div key={asset.symbol} className="flex items-center gap-2">
								<span className="text-xs font-bold w-12">{asset.symbol}</span>
								<div className="flex-1 h-4 bg-muted relative">
									<div
										className="absolute inset-y-0 left-0 bg-black dark:bg-white"
										style={{ width: `${asset.percentage}%` }}
									/>
								</div>
								<span className="text-xs font-mono font-bold w-8 text-right">
									{asset.percentage}%
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
