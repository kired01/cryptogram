import { create } from "zustand"
import { persist } from "zustand/middleware"

type TUserStore = {
	level: number
	onNextLevel: () => void
}

export const useUserStore = create(
	persist<TUserStore>(
		(set, get) => ({
			level: 1,
			onNextLevel: () => set({ level: get().level + 1 }),
		}),
		{
			name: "level-storage",
		},
	),
)
