export const getKeyByValue = <T extends object, V extends T[keyof T]>(object: T, value: V) => {
	const key = (Object.keys(object) as (keyof T)[]).find((key) => object[key] === value)
	if (!key) throw new Error("Key not found")
	if (Number(key) == key) return Number(key)
	return key
}
