"use client";

import { BarChart3, Boxes, Code2, Cpu, Shield, Zap } from "lucide-react";

const features = [
	{
		icon: Zap,
		title: "FAST EXECUTION",
		description:
			"Execute orders with optimized latency on Solana mainnet. Direct market access with smart order routing.",
	},
	{
		icon: Code2,
		title: "TYPESCRIPT SDK",
		description:
			"Full-featured SDK with type safety. Build, backtest, and deploy strategies with a clean API.",
	},
	{
		icon: BarChart3,
		title: "REAL-TIME ANALYTICS",
		description:
			"Monitor performance metrics, PnL, and execution quality with streaming data feeds.",
	},
	{
		icon: Shield,
		title: "RISK MANAGEMENT",
		description:
			"Built-in position limits, stop-loss handling, and configurable risk controls for your strategies.",
	},
	{
		icon: Boxes,
		title: "STRATEGY COMPOSER",
		description:
			"Visual strategy builder with pre-built modules. Chain conditions, indicators, and execution logic.",
	},
	{
		icon: Cpu,
		title: "PARALLEL EXECUTION",
		description:
			"Run multiple strategies simultaneously with isolated risk management and position tracking.",
	},
];

export function FeaturesGrid() {
	return (
		<section
			id="features"
			className="container mx-auto px-4 py-20 border-t-4 border-black dark:border-white"
		>
			<div className="text-center mb-16">
				<h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter mb-4">
					BUILT FOR TRADERS
				</h2>
				<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
					Everything you need to build, test, and deploy quantitative trading
					strategies on Solana.
				</p>
			</div>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{features.map((feature) => (
					<div
						key={feature.title}
						className="group border-4 border-black dark:border-white p-8 bg-white dark:bg-black hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
					>
						<feature.icon className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
						<h3 className="text-xl font-bold mb-3">{feature.title}</h3>
						<p className="leading-relaxed text-sm opacity-80">
							{feature.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}
