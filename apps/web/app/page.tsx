"use client";

import {
	CtaSection,
	FeaturesGrid,
	HeroSection,
	SdkShowcase,
	SpeedMetrics,
} from "@repo/ui/landing";
import { Footer, UnifiedNavbar } from "@/components";

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			<UnifiedNavbar />
			<HeroSection />
			<FeaturesGrid />
			<SpeedMetrics />
			<SdkShowcase />
			<CtaSection />
			<Footer />
		</div>
	);
}
