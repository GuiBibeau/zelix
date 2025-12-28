"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

const codeExample = `import { Zelix, Strategy } from '@zelix/sdk'

const zelix = new Zelix({
  rpcUrl: process.env.SOLANA_RPC_URL,
  wallet: yourWallet,
})

// Define your strategy
const strategy = new Strategy({
  name: 'momentum-scalper',
  interval: '1m',
  capital: 10_000,
})

strategy.on('candle', async (data) => {
  const { close, volume, indicators } = data
  
  if (indicators.rsi < 30 && volume > avgVolume) {
    await strategy.buy('SOL', { amount: 100 })
  }
})

// Deploy to mainnet
await zelix.deploy(strategy)`;

export function SdkShowcase() {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(codeExample);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section id="sdk" className="container mx-auto px-4 py-20">
			<div className="grid lg:grid-cols-2 gap-12 items-center">
				<div className="space-y-6">
					<h2 className="text-4xl lg:text-6xl font-bold uppercase tracking-tighter leading-none">
						BUILD WITH THE SDK
					</h2>
					<p className="text-lg leading-relaxed">
						Deploy trading strategies with just a few lines of code. Full
						TypeScript support with intelligent autocomplete and type safety.
					</p>

					<div className="space-y-4">
						<div className="flex items-start gap-3">
							<div className="w-6 h-6 bg-black dark:bg-white flex-shrink-0 mt-1" />
							<div>
								<div className="font-bold mb-1">Type-Safe API</div>
								<div className="text-sm text-muted-foreground">
									Full TypeScript definitions for all methods and events
								</div>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<div className="w-6 h-6 bg-black dark:bg-white flex-shrink-0 mt-1" />
							<div>
								<div className="font-bold mb-1">Built-in Backtesting</div>
								<div className="text-sm text-muted-foreground">
									Test strategies against historical data before deployment
								</div>
							</div>
						</div>
						<div className="flex items-start gap-3">
							<div className="w-6 h-6 bg-black dark:bg-white flex-shrink-0 mt-1" />
							<div>
								<div className="font-bold mb-1">Real-time Webhooks</div>
								<div className="text-sm text-muted-foreground">
									Get instant notifications on fills, errors, and PnL updates
								</div>
							</div>
						</div>
					</div>

					<button
						type="button"
						className="border-4 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black px-8 py-4 text-base font-bold uppercase transition-all hover:translate-x-[-4px] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
					>
						READ THE DOCS
					</button>
				</div>

				<div className="border-4 border-black dark:border-white bg-muted dark:bg-muted/20">
					<div className="border-b-4 border-black dark:border-white p-4 flex items-center justify-between bg-white dark:bg-black">
						<div className="flex items-center gap-2">
							<div className="w-3 h-3 bg-destructive" />
							<div className="w-3 h-3 bg-success" />
							<div className="w-3 h-3 bg-muted-foreground" />
							<span className="ml-4 text-xs font-bold">strategy.ts</span>
						</div>
						<button
							type="button"
							onClick={handleCopy}
							className="p-2 hover:bg-muted transition-colors"
							aria-label="Copy code"
						>
							{copied ? (
								<Check className="w-4 h-4" />
							) : (
								<Copy className="w-4 h-4" />
							)}
						</button>
					</div>
					<pre className="p-6 overflow-x-auto text-xs lg:text-sm leading-relaxed">
						<code>{codeExample}</code>
					</pre>
				</div>
			</div>
		</section>
	);
}
