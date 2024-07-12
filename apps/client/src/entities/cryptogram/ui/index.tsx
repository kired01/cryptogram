import { Button } from "@nextui-org/button"
import { ScrollShadow } from "@nextui-org/scroll-shadow"

import { getKeyByValue } from "@/shared/lib"

import type { TCryptogramProps } from "../model"

const r = {
	1: "А",
	2: "У",
	3: "Э",
	4: "С",
	5: "М",
	6: "Д",
	7: "П",
	8: "И",
	9: "З",
	10: "В",
	11: "Н",
	12: "Т",
	13: "Р",
	14: "Х",
	15: "Ч",
	16: "Й",
	17: "Ф",
	18: "Я",
	19: "Е",
	20: "Г",
	21: "О",
	22: "Ы",
	23: "К",
	24: "Щ",
	25: "Ц",
	26: "Ю",
	27: "Ё",
	28: "Ь",
	29: "Ъ",
	30: "Ж",
	31: "Ш",
	32: "Л",
	33: "Б",
}

export const Cryptogram: React.FC<TCryptogramProps> = ({
	phrase,
	hiddenPhrase,
	selectedLetter,
	onLetterPress,
}) => {
	return (
		<ScrollShadow
			hideScrollBar
			className="container h-[calc(100svh-25svh-100px)] py-[15px]">
			<div className="flex flex-wrap justify-center gap-x-[20px] gap-y-[10px]">
				{phrase.map((word, wordIndex) => (
					<div
						key={wordIndex}
						className="flex">
						{word.map((letter, letterIndex) => {
							const isSelected =
								selectedLetter?.wordIndex === wordIndex &&
								selectedLetter?.letterIndex === letterIndex
							const isVisible = hiddenPhrase[wordIndex]?.[letterIndex] === letter
							if (/[^A-ЯЁ]/.test(letter)) {
								return (
									<div
										key={letterIndex}
										className="h-[60px] pt-[8px]">
										{letter}
									</div>
								)
							}
							return (
								<Button
									key={letterIndex}
									variant={isSelected ? "solid" : "light"}
									radius="sm"
									onPress={() => onLetterPress(wordIndex, letterIndex)}
									className="mx-[1px] h-[55px] min-w-[25px] px-0">
									<div className="w-[20px] divide-y-[1px] divide-brown">
										<p className="h-[24px] font-medium">{isVisible && letter}</p>
										{/[A-ЯЁ]/.test(letter) && (
											<p className="text-light text-sm">{getKeyByValue(r, letter)}</p>
										)}
									</div>
								</Button>
							)
						})}
					</div>
				))}
			</div>
		</ScrollShadow>
	)
}
