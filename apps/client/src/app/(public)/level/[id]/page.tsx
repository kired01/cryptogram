"use client"

import { Button } from "@nextui-org/button"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import { Keyboard } from "@/features/keyboard"

import { Cryptogram, type TCryptogramProps, useCryptogram, useLevel } from "@/entities/cryptogram"

import { arraysEqual } from "@/shared/lib"

export default function LevelPage({ params }: { params: { id: number } }) {
	const id = Number(params.id)

	const router = useRouter()
	const onNextLevel = useLevel((state) => state.onNextLevel)
	const { isPending, data, isError } = useCryptogram(id)

	const [hiddenPhrase, setHiddenPhrase] = useState<TCryptogramProps["hiddenPhrase"]>([[]])
	const [selectedLetter, setSelectedLetter] = useState<TCryptogramProps["selectedLetter"]>(null)

	useEffect(() => {
		if (data?.hiddenPhrase) {
			setHiddenPhrase(data?.hiddenPhrase)
		}
	}, [data?.hiddenPhrase])
	useEffect(() => {
		if (data && arraysEqual(data.phrase, hiddenPhrase)) {
			onNextLevel()
		}
	}, [data, hiddenPhrase, onNextLevel])

	const handleLetterSelect = (wordIndex: number, letterIndex: number) => {
		setSelectedLetter({ wordIndex, letterIndex })
	}
	const handleNextLevel = () => {
		router.push(`/level/${id + 1}`)
	}
	const handleKeyPress = (letter: string) => {
		if (selectedLetter !== null) {
			const { wordIndex, letterIndex } = selectedLetter
			if (data?.phrase[wordIndex]?.[letterIndex] === letter) {
				const newHiddenPhrase = [...hiddenPhrase]
				newHiddenPhrase[wordIndex]![letterIndex] = letter
				setHiddenPhrase([...newHiddenPhrase])
			}
		}
	}

	if (isPending) {
		return <>Loading...</>
	}

	if (isError) {
		return <p>Error</p>
	}

	if (data) {
		return (
			<>
				<Cryptogram
					phrase={data.phrase}
					hiddenPhrase={hiddenPhrase ? data.hiddenPhrase : hiddenPhrase}
					selectedLetter={selectedLetter}
					onLetterPress={handleLetterSelect}
				/>
				{arraysEqual(data.phrase, hiddenPhrase) ?
					<div className="fixed bottom-0 flex h-1/4 w-full items-center justify-center rounded-t-2xl bg-brown-300">
						<Button
							color="primary"
							onPress={handleNextLevel}
							className="h-[50px] min-w-[200px] font-bold uppercase">
							Далее
						</Button>
					</div>
				:	<Keyboard onKeyPress={handleKeyPress} />}
			</>
		)
	}
}
