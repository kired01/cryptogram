import { create } from "zustand"
import { persist } from "zustand/middleware"

type TUseLevel = {
	level: number
	onNextLevel: () => void
}

export const useLevel = create(
	persist<TUseLevel>(
		(set, get) => ({
			level: 1,
			onNextLevel: () => set({ level: get().level + 1 }),
		}),
		{
			name: "level-storage",
		},
	),
)
