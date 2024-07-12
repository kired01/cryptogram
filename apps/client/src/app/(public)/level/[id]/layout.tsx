import { HydrationBoundary, dehydrate } from "@tanstack/react-query"
import type { Metadata } from "next"

import { Header } from "@/widgets/header"

import { getCryptogram } from "@/entities/cryptogram"

import { queryClient } from "@/shared/api"

export const metadata: Metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
}

type TLevelLayout = {
	readonly children: React.ReactNode
	params: { id: number }
}

export default async function LevelLayout({ children, params }: TLevelLayout) {
	const id = Number(params.id)

	await queryClient.prefetchQuery({
		queryKey: ["cryptogram", id],
		queryFn: () => getCryptogram(id),
	})

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<div className="relative flex min-h-screen flex-col">
				<Header level={id} />
				<main className="grow">{children}</main>
			</div>
		</HydrationBoundary>
	)
}