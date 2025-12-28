"use client";

import { ArrowDown, ArrowUp } from "lucide-react";

interface Token {
	symbol: string;
	name: string;
	price: number;
	change24h: number;
	volume: string;
	marketCap: string;
}

const mockTokens: Token[] = [
	{
		symbol: "BTC",
		name: "Bitcoin",
		price: 67432.21,
		change24h: 2.45,
		volume: "28.4B",
		marketCap: "1.32T",
	},
	{
		symbol: "ETH",
		name: "Ethereum",
		price: 3842.56,
		change24h: -1.23,
		volume: "15.2B",
		marketCap: "462B",
	},
	{
		symbol: "SOL",
		name: "Solana",
		price: 142.89,
		change24h: 5.67,
		volume: "3.8B",
		marketCap: "64B",
	},
	{
		symbol: "BNB",
		name: "BNB",
		price: 592.34,
		change24h: 1.89,
		volume: "2.1B",
		marketCap: "91B",
	},
	{
		symbol: "XRP",
		name: "Ripple",
		price: 0.6234,
		change24h: -3.45,
		volume: "1.9B",
		marketCap: "34B",
	},
	{
		symbol: "ADA",
		name: "Cardano",
		price: 0.5821,
		change24h: 0.89,
		volume: "892M",
		marketCap: "20B",
	},
	{
		symbol: "DOGE",
		name: "Dogecoin",
		price: 0.1523,
		change24h: 4.32,
		volume: "1.2B",
		marketCap: "22B",
	},
	{
		symbol: "AVAX",
		name: "Avalanche",
		price: 38.45,
		change24h: -2.11,
		volume: "456M",
		marketCap: "14B",
	},
];

export function TokenList() {
	return (
		<div className="border-4 border-black dark:border-white bg-white dark:bg-black">
			<div className="border-b-2 border-black dark:border-white px-4 py-2 bg-black dark:bg-white text-white dark:text-black">
				<span className="text-xs font-bold">MARKET OVERVIEW</span>
			</div>
			<div className="overflow-x-auto">
				<table className="w-full font-mono text-sm">
					<thead className="border-b-2 border-black dark:border-white">
						<tr>
							<th className="text-left px-4 py-3 text-xs font-bold">TOKEN</th>
							<th className="text-right px-4 py-3 text-xs font-bold">PRICE</th>
							<th className="text-right px-4 py-3 text-xs font-bold">24H</th>
							<th className="text-right px-4 py-3 text-xs font-bold hidden md:table-cell">
								VOLUME
							</th>
							<th className="text-right px-4 py-3 text-xs font-bold hidden lg:table-cell">
								MCAP
							</th>
							<th className="text-center px-4 py-3 text-xs font-bold">
								ACTION
							</th>
						</tr>
					</thead>
					<tbody>
						{mockTokens.map((token, i) => (
							<tr
								key={token.symbol}
								className={`border-b-2 border-black dark:border-white hover:bg-muted cursor-pointer transition-colors ${i === mockTokens.length - 1 ? "border-b-0" : ""}`}
							>
								<td className="px-4 py-3">
									<div className="font-bold">{token.symbol}</div>
									<div className="text-xs text-muted-foreground">
										{token.name}
									</div>
								</td>
								<td className="text-right px-4 py-3 font-bold tabular-nums">
									$
									{token.price.toLocaleString("en-US", {
										minimumFractionDigits: 2,
									})}
								</td>
								<td className="text-right px-4 py-3">
									<span
										className={`flex items-center justify-end gap-1 font-bold ${token.change24h > 0 ? "text-success" : "text-destructive"}`}
									>
										{token.change24h > 0 ? (
											<ArrowUp className="w-3 h-3" />
										) : (
											<ArrowDown className="w-3 h-3" />
										)}
										{Math.abs(token.change24h)}%
									</span>
								</td>
								<td className="text-right px-4 py-3 tabular-nums hidden md:table-cell">
									${token.volume}
								</td>
								<td className="text-right px-4 py-3 tabular-nums hidden lg:table-cell">
									${token.marketCap}
								</td>
								<td className="px-4 py-3">
									<button
										type="button"
										className="w-full border-2 border-black dark:border-white px-3 py-1 text-xs font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
									>
										TRADE
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
