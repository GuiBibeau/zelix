"use client";

import { Activity, BarChart3, Shield, Zap } from "lucide-react";

const highlights = [
	{
		icon: Zap,
		title: "OPTIMIZED ROUTING",
		description:
			"Smart order routing across multiple Solana DEXs for best execution",
	},
	{
		icon: Activity,
		title: "REAL-TIME DATA",
		description: "Live market data feeds and execution updates via WebSocket",
	},
	{
		icon: Shield,
		title: "RELIABLE INFRA",
		description:
			"Redundant RPC nodes and automatic failover for consistent uptime",
	},
	{
		icon: BarChart3,
		title: "TRANSPARENT FEES",
		description: "Simple, competitive pricing with no hidden costs or markups",
	},
];

export function SpeedMetrics() {
	return (
		<section
			id="performance"
			className="border-y-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black py-20"
		>
			<div className="container mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter mb-4">
						WHY ZELIX
					</h2>
					<p className="text-lg opacity-80">
						Infrastructure designed for serious traders
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
					{highlights.map((item) => (
						<div
							key={item.title}
							className="border-4 border-white dark:border-black p-6 text-center hover:scale-105 transition-transform"
						>
							<item.icon className="w-10 h-10 mx-auto mb-4" />
							<div className="text-sm font-bold mb-2">{item.title}</div>
							<div className="text-xs opacity-80">{item.description}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
