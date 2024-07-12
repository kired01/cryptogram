type THeaderProps = {
	level: number
}

export const Header: React.FC<THeaderProps> = ({ level }) => {
	return (
		<div className="h-[100px] bg-white p-[15px]">
			<p className="flex justify-end text-2xl font-medium text-brown">Уровень {level}</p>
		</div>
	)
}
