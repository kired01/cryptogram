import { Button } from "@nextui-org/button"

const keyboardLetters = [
	["Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х"],
	["Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э"],
	[" ", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Ъ", "Б", "Ю", " "],
]

type TypeKeyboardProps = {
	onKeyPress: (letter: string) => void
}

export const Keyboard: React.FC<TypeKeyboardProps> = ({ onKeyPress }) => {
	return (
		<div className="fixed bottom-0 h-1/4 w-full rounded-t-2xl bg-brown-300 px-[5px] pt-[5px]">
			{keyboardLetters.map((lettersRow, rowIndex) => (
				<div
					key={rowIndex}
					className="flex">
					{lettersRow.map((letter, letterIndex) => {
						if (/[^A-ЯЁ]/.test(letter)) {
							return (
								<div
									key={letterIndex}
									className="basis-[4.545%]"
								/>
							)
						}
						return (
							<Button
								key={letter}
								color="secondary"
								radius="md"
								disableAnimation
								onPress={() => onKeyPress(letter)}
								className="mx-[2px] my-[3px] h-[50px] min-w-[1px] flex-1 px-0 text-2xl font-semibold">
								{letter}
							</Button>
						)
					})}
				</div>
			))}
		</div>
	)
}
