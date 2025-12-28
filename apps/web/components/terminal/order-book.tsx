"use client";

export function OrderBook() {
	const asks = [
		{ price: 67445.32, amount: 0.234, total: 15782.33 },
		{ price: 67443.21, amount: 0.891, total: 60091.9 },
		{ price: 67441.89, amount: 1.234, total: 83203.29 },
		{ price: 67439.54, amount: 0.567, total: 38236.16 },
		{ price: 67437.23, amount: 2.134, total: 143898.85 },
	];

	const bids = [
		{ price: 67432.21, amount: 0.892, total: 60149.49 },
		{ price: 67430.12, amount: 1.234, total: 83208.87 },
		{ price: 67428.89, amount: 0.567, total: 38230.18 },
		{ price: 67426.45, amount: 0.234, total: 15777.79 },
		{ price: 67424.32, amount: 3.456, total: 233009.65 },
	];

	return (
		<div className="border-4 border-black dark:border-white bg-white dark:bg-black">
			<div className="border-b-2 border-black dark:border-white px-4 py-2 bg-black dark:bg-white text-white dark:text-black">
				<span className="text-xs font-bold">ORDER BOOK</span>
			</div>
			<div className="font-mono text-xs">
				<div className="grid grid-cols-3 gap-2 px-4 py-2 border-b border-muted text-muted-foreground font-bold">
					<div className="text-right">PRICE</div>
					<div className="text-right">AMOUNT</div>
					<div className="text-right">TOTAL</div>
				</div>

				<div>
					{asks.reverse().map((ask) => (
						<div
							key={`ask-${ask.price}`}
							className="grid grid-cols-3 gap-2 px-4 py-1 hover:bg-muted cursor-pointer relative"
						>
							<div
								className="absolute inset-y-0 right-0 bg-destructive/10"
								style={{ width: `${(ask.amount / 3.5) * 100}%` }}
							/>
							<div className="text-right text-destructive font-bold relative z-10">
								{ask.price.toFixed(2)}
							</div>
							<div className="text-right tabular-nums relative z-10">
								{ask.amount.toFixed(3)}
							</div>
							<div className="text-right tabular-nums relative z-10">
								{ask.total.toFixed(2)}
							</div>
						</div>
					))}
				</div>

				<div className="px-4 py-3 border-y-2 border-black dark:border-white bg-muted">
					<div className="text-2xl font-bold">67,432.21</div>
					<div className="text-muted-foreground">LAST PRICE</div>
				</div>

				<div>
					{bids.map((bid) => (
						<div
							key={`bid-${bid.price}`}
							className="grid grid-cols-3 gap-2 px-4 py-1 hover:bg-muted cursor-pointer relative"
						>
							<div
								className="absolute inset-y-0 right-0 bg-success/10"
								style={{ width: `${(bid.amount / 3.5) * 100}%` }}
							/>
							<div className="text-right text-success font-bold relative z-10">
								{bid.price.toFixed(2)}
							</div>
							<div className="text-right tabular-nums relative z-10">
								{bid.amount.toFixed(3)}
							</div>
							<div className="text-right tabular-nums relative z-10">
								{bid.total.toFixed(2)}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
