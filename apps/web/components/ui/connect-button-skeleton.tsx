"use client";

import { motion } from "framer-motion";

export function ConnectButtonSkeleton() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 0.15, ease: "easeOut" }}
			className="border-4 border-black dark:border-white bg-black dark:bg-white overflow-hidden relative w-[140px] h-[42px]"
			aria-hidden="true"
		>
			<motion.div
				className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
				animate={{ x: ["-100%", "100%"] }}
				transition={{
					duration: 1.5,
					ease: "easeInOut",
					repeat: Number.POSITIVE_INFINITY,
					repeatDelay: 0.5,
				}}
			/>
		</motion.div>
	);
}
