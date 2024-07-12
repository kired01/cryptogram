import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { id: number } }) {
	const id = Number(params.id) - 1

	const phrases = {
		1: "чТо раЗуМ чЕлоВеКа МоЖеТ ПоСтиГнУть и Во ЧтО оН МоЖеТ ПоВерИть, ТоГо он СпоСоБеН ДоСтИчЬ.",
		2: "лОГиКа МоЖеТ ПрИвЕстИ ВаС ОТ ПунКТа а К ПунКТу б, а ВоОбРаЖеНиЕ — КуДа УГоДнО.",
		3: "нАчиНаТь ВсЕгДа СтоИт С ТоГо, ЧТо СеЕт СоМНеНиЯ.",
		4: "наСтОЯщАя ОТвЕтСтВенНосТь БыВаеТ ТоЛьКо ЛиЧнОй.",
		5: "нАуКа — ЭТо ОрГаНиЗоВаНнЫе ЗНаНиЯ, МуДрОсТь — ЭТо ОрГаНиЗоВаНнАя ЖиЗнЬ.",
	}

	const initialData = Object.values(phrases).map((initialPhrase) => {
		const phrase = initialPhrase
			.toUpperCase()
			.split(" ")
			.map((word) => word.split(""))

		const hiddenPhrase = initialPhrase
			.split(" ")
			.map((word) => word.split(""))
			.map((word) => word.map((letter) => letter.replace(/[а-яё]/g, "")))

		return { phrase, hiddenPhrase }
	})

	if (id < 0 || id >= initialData.length) {
		return NextResponse.json({ error: "Invalid Id" }, { status: 404 })
	}

	return NextResponse.json({
		data: initialData[id],
	})
}
