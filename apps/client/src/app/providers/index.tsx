"use client"

import { NextUIProvider } from "@nextui-org/system"
import { QueryClientProvider } from "@tanstack/react-query"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { queryClient } from "@/shared/api"

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<QueryClientProvider client={queryClient}>
			<NextUIProvider>
				<SpeedInsights />
				<Analytics />
				{children}
			</NextUIProvider>
		</QueryClientProvider>
	)
}
