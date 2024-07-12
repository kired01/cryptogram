export const arraysEqual = <T>(arr1: T[], arr2: T[]) => {
	if (arr1.length !== arr2.length) {
		return false
	}

	for (let i = 0; i < arr1.length; i++) {
		const item1 = arr1[i]
		const item2 = arr2[i]

		if (Array.isArray(item1) && Array.isArray(item2)) {
			if (!arraysEqual(item1, item2)) {
				return false
			}
			continue
		}
		if (item1 !== item2) {
			return false
		}
	}

	return true
}
