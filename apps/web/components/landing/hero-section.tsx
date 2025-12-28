"use client";

import { ArrowRight, Code, Shield, Zap } from "lucide-react";

export function HeroSection() {
	return (
		<section className="container mx-auto px-4 py-20 lg:py-32">
			<div className="grid lg:grid-cols-2 gap-12 items-center">
				<div className="space-y-8">
					<div className="inline-flex items-center gap-2 border-2 border-black dark:border-white px-4 py-2 text-xs font-bold animate-pulse">
						<div className="w-2 h-2 bg-success" />
						<span>SOLANA MAINNET LIVE</span>
					</div>

					<h1 className="text-5xl lg:text-7xl font-bold uppercase leading-none tracking-tighter text-balance">
						QUANT EXECUTION
						<br />
						<span className="inline-block mt-2 border-4 border-black dark:border-white px-4 py-2 bg-black dark:bg-white text-white dark:text-black">
							AT SPEED
						</span>
					</h1>

					<p className="text-lg lg:text-xl leading-relaxed max-w-xl">
						High-performance quantitative trading infrastructure for Solana.
						Execute complex strategies with low latency and reliable order
						routing.
					</p>

					<div className="flex flex-col sm:flex-row gap-4">
						<button
							type="button"
							className="group border-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black px-8 py-4 text-base font-bold uppercase transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
						>
							<span className="flex items-center gap-2">
								START BUILDING
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</span>
						</button>
						<button
							type="button"
							className="border-4 border-black dark:border-white bg-white dark:bg-black px-8 py-4 text-base font-bold uppercase transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
						>
							VIEW DOCS
						</button>
					</div>
				</div>

				<div className="space-y-4">
					<div className="border-4 border-black dark:border-white p-6 bg-white dark:bg-black hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all">
						<div className="flex items-center justify-between mb-4">
							<span className="text-sm font-bold">OPTIMIZED EXECUTION</span>
							<Zap className="w-5 h-5" />
						</div>
						<div className="text-sm leading-relaxed">
							Direct market access with smart order routing across Solana DEXs
							and liquidity sources.
						</div>
					</div>

					<div className="border-4 border-black dark:border-white p-6 bg-white dark:bg-black hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all">
						<div className="flex items-center justify-between mb-4">
							<span className="text-sm font-bold">BUILT FOR TRADERS</span>
							<Shield className="w-5 h-5" />
						</div>
						<div className="text-sm leading-relaxed">
							Risk management, position tracking, and execution analytics out of
							the box.
						</div>
					</div>

					<div className="border-4 border-black dark:border-white p-6 bg-black dark:bg-white text-white dark:text-black hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] transition-all">
						<div className="flex items-center justify-between mb-4">
							<span className="text-sm font-bold">TYPESCRIPT SDK</span>
							<Code className="w-5 h-5" />
						</div>
						<div className="text-sm font-mono leading-relaxed">
							{"> npm install @zelix/sdk"}
						</div>
						<div className="text-sm mt-2 opacity-80">
							GET STARTED IN MINUTES
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
