"use client";

import { ArrowRight, BookOpen } from "lucide-react";

export function CtaSection() {
	return (
		<section className="container mx-auto px-4 py-20">
			<div className="border-4 border-black dark:border-white p-12 lg:p-20 text-center bg-black dark:bg-white text-white dark:text-black">
				<h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter mb-6">
					START BUILDING TODAY
				</h2>
				<p className="text-lg mb-12 max-w-2xl mx-auto opacity-90">
					Join traders using Zelix to build and deploy quantitative strategies
					on Solana.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<button
						type="button"
						className="group border-4 border-white dark:border-black bg-white dark:bg-black text-black dark:text-white px-8 py-4 text-base font-bold uppercase transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
					>
						<span className="flex items-center gap-2">
							REQUEST ACCESS
							<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
						</span>
					</button>
					<button
						type="button"
						className="border-4 border-white dark:border-black px-8 py-4 text-base font-bold uppercase transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
					>
						<span className="flex items-center gap-2">
							<BookOpen className="w-5 h-5" />
							DOCUMENTATION
						</span>
					</button>
				</div>

				<div className="mt-16 flex flex-wrap justify-center gap-8 text-sm opacity-80">
					<div className="flex items-center gap-2">
						<div className="w-3 h-3 bg-white dark:bg-black" />
						<span>TYPESCRIPT SDK</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-3 h-3 bg-white dark:bg-black" />
						<span>SOLANA NATIVE</span>
					</div>
					<div className="flex items-center gap-2">
						<div className="w-3 h-3 bg-white dark:bg-black" />
						<span>DEVELOPER SUPPORT</span>
					</div>
				</div>
			</div>
		</section>
	);
}
