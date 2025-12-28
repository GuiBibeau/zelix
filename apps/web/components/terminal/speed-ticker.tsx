"use client";

import { TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export function SpeedTicker() {
	const [speed, setSpeed] = useState(9842);

	useEffect(() => {
		const interval = setInterval(() => {
			setSpeed((prev) => prev + Math.floor(Math.random() * 100));
		}, 150);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="border-4 border-black dark:border-white bg-white dark:bg-black overflow-hidden">
			<div className="border-b-2 border-black dark:border-white px-4 py-2 bg-black dark:bg-white text-white dark:text-black flex items-center gap-2">
				<TrendingUp className="w-4 h-4" />
				<span className="text-xs font-bold">SPEED METRICS</span>
			</div>
			<div className="p-4">
				<div className="grid grid-cols-3 gap-4 text-center">
					<div>
						<div className="text-xs text-muted-foreground mb-1">TX/SEC</div>
						<div className="text-2xl font-bold font-mono tabular-nums">
							{speed}
						</div>
					</div>
					<div>
						<div className="text-xs text-muted-foreground mb-1">EXEC</div>
						<div className="text-2xl font-bold font-mono tabular-nums">
							12ms
						</div>
					</div>
					<div>
						<div className="text-xs text-muted-foreground mb-1">UPTIME</div>
						<div className="text-2xl font-bold font-mono tabular-nums">
							99.9%
						</div>
					</div>
				</div>
				<div className="mt-4 h-2 bg-muted relative overflow-hidden">
					<div
						className="absolute inset-y-0 left-0 bg-black dark:bg-white transition-all duration-150"
						style={{ width: `${speed % 100}%` }}
					/>
				</div>
			</div>
		</div>
	);
}
