import { http } from "@/shared/api"

import type { TCryptogramsResponse } from "../model"

export const getCryptogram = async (id: number) => {
	const { data } = await http.get<TCryptogramsResponse>(`/cryptograms/${id}`)
	return data
}
