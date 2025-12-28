"use client";

import { useEffect, useState } from "react";

export function SpeedMetrics() {
	const [metrics, setMetrics] = useState({
		orders: 847234,
		volume: 2847,
		strategies: 143,
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setMetrics((prev) => ({
				orders: prev.orders + Math.floor(Math.random() * 100),
				volume: prev.volume + Math.floor(Math.random() * 10),
				strategies: prev.strategies + (Math.random() > 0.7 ? 1 : 0),
			}));
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id="performance"
			className="border-y-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black py-20"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter mb-4">
						LIVE NETWORK STATS
					</h2>
					<p className="text-lg opacity-80">
						Real-time metrics from Zelix execution fabric
					</p>
				</div>

				<div className="grid md:grid-cols-3 gap-6">
					<div className="border-4 border-white dark:border-black p-8 text-center hover:scale-105 transition-transform">
						<div className="text-5xl lg:text-6xl font-bold font-mono mb-2">
							{metrics.orders.toLocaleString()}
						</div>
						<div className="text-sm font-bold">ORDERS EXECUTED TODAY</div>
					</div>

					<div className="border-4 border-white dark:border-black p-8 text-center hover:scale-105 transition-transform">
						<div className="text-5xl lg:text-6xl font-bold font-mono mb-2">
							${metrics.volume}M
						</div>
						<div className="text-sm font-bold">24H TRADING VOLUME</div>
					</div>

					<div className="border-4 border-white dark:border-black p-8 text-center hover:scale-105 transition-transform">
						<div className="text-5xl lg:text-6xl font-bold font-mono mb-2">
							{metrics.strategies}
						</div>
						<div className="text-sm font-bold">ACTIVE STRATEGIES</div>
					</div>
				</div>

				<div className="mt-12 grid md:grid-cols-4 gap-4 text-center">
					<div>
						<div className="text-3xl font-bold font-mono mb-1">847μs</div>
						<div className="text-xs opacity-80">AVG LATENCY</div>
					</div>
					<div>
						<div className="text-3xl font-bold font-mono mb-1">99.99%</div>
						<div className="text-xs opacity-80">UPTIME</div>
					</div>
					<div>
						<div className="text-3xl font-bold font-mono mb-1">15,234</div>
						<div className="text-xs opacity-80">TPS CAPACITY</div>
					</div>
					<div>
						<div className="text-3xl font-bold font-mono mb-1">0.02%</div>
						<div className="text-xs opacity-80">MAKER FEE</div>
					</div>
				</div>
			</div>
		</section>
	);
}
