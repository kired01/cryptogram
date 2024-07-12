"use client"

import { Button } from "@nextui-org/button"
import { useRouter } from "next/navigation"

import { useLevel } from "@/entities/cryptogram"

export default function HomePage() {
	const router = useRouter()

	const level = useLevel((state) => state.level)

	const handlePlayClick = () => {
		router.push(`/level/${level}`)
	}

	return (
		<div className="flex h-screen flex-col items-center justify-center">
			<Button
				color="primary"
				onPress={handlePlayClick}
				className="h-[50px] min-w-[200px] font-bold uppercase">
				Играть
			</Button>
		</div>
	)
}
