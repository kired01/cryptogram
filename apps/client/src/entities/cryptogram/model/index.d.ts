import type { Nullable } from "@/shared/lib"

export type TCryptogramsResponse = {
	data: TCryptogramsData
}
export type TCryptogramsData = {
	phrase: string[][]
	hiddenPhrase: string[][]
}
export type TCryptogramProps = {
	phrase: TCryptogramsData["phrase"]
	hiddenPhrase: TCryptogramsData["hiddenPhrase"]
	selectedLetter: Nullable<{
		wordIndex: number
		letterIndex: number
	}>
	onLetterPress: (wordIndex: number, letterIndex: number) => void
}
