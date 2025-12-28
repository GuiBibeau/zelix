"use client";

import { Github, MessageCircle, Twitter, Zap } from "lucide-react";
import Link from "next/link";

export function Footer() {
	return (
		<footer className="border-t-4 border-black dark:border-white py-12">
			<div className="container mx-auto px-4">
				<div className="grid md:grid-cols-4 gap-8 mb-12">
					<div className="space-y-4">
						<div className="flex items-center gap-2">
							<div className="w-8 h-8 bg-black dark:bg-white flex items-center justify-center">
								<Zap className="w-5 h-5 text-white dark:text-black" />
							</div>
							<span className="text-xl font-bold uppercase">ZELIX</span>
						</div>
						<p className="text-sm text-muted-foreground">
							High-performance quant execution fabric for Solana.
						</p>
					</div>

					<div>
						<div className="font-bold mb-4">PRODUCT</div>
						<div className="space-y-2 text-sm">
							<div>
								<Link href="/terminal" className="hover:underline">
									Terminal
								</Link>
							</div>
							<div>
								<a href="#features" className="hover:underline">
									Features
								</a>
							</div>
							<div>
								<a href="#sdk" className="hover:underline">
									SDK
								</a>
							</div>
							<div>
								<a href="#" className="hover:underline">
									Pricing
								</a>
							</div>
						</div>
					</div>

					<div>
						<div className="font-bold mb-4">DEVELOPERS</div>
						<div className="space-y-2 text-sm">
							<div>
								<a href="#" className="hover:underline">
									Documentation
								</a>
							</div>
							<div>
								<a href="#" className="hover:underline">
									API Reference
								</a>
							</div>
							<div>
								<a href="#" className="hover:underline">
									Examples
								</a>
							</div>
							<div>
								<a href="#" className="hover:underline">
									Status
								</a>
							</div>
						</div>
					</div>

					<div>
						<div className="font-bold mb-4">COMPANY</div>
						<div className="space-y-2 text-sm">
							<div>
								<a href="#" className="hover:underline">
									About
								</a>
							</div>
							<div>
								<a href="#" className="hover:underline">
									Blog
								</a>
							</div>
							<div>
								<a href="#" className="hover:underline">
									Careers
								</a>
							</div>
							<div>
								<a href="#" className="hover:underline">
									Contact
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="border-t-2 border-black dark:border-white pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
					<div className="text-sm text-muted-foreground">
						© 2025 Zelix. All rights reserved.
					</div>
					<div className="flex items-center gap-4">
						<a
							href="#"
							className="p-2 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
						>
							<Twitter className="w-5 h-5" />
						</a>
						<a
							href="#"
							className="p-2 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
						>
							<Github className="w-5 h-5" />
						</a>
						<a
							href="#"
							className="p-2 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
						>
							<MessageCircle className="w-5 h-5" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
