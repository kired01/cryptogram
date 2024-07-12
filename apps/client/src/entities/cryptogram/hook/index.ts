"use client"

import { useQuery } from "@tanstack/react-query"

import { getCryptogram } from "../api"

export const useCryptogram = (id: number) => {
	const { isPending, data, isError } = useQuery({
		queryKey: ["cryptogram", id],
		queryFn: () => getCryptogram(id),
		select: (data) => data.data,
	})

	return { isPending, data, isError }
}
