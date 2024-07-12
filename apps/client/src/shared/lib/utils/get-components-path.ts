import { join } from "path"

export const getComponentsPath = (
	dependency: string,
	hash: string,
	dist: string,
	components: string[],
) => {
	const unpluggedFolderPath = "../../.yarn/unplugged"
	const unpluggedFolder = `${dependency.replace("/", "-")}-virtual-${hash}`
	const componentFiles = `(${components.join("|")}).js`
	const dependencyUnpluggedPath = join(
		unpluggedFolderPath,
		unpluggedFolder,
		"node_modules",
		dependency,
		dist,
		componentFiles,
	)

	if (process.env.VERCEL) {
		return dependencyUnpluggedPath.replace(join(unpluggedFolderPath, unpluggedFolder), "../../")
	}

	return dependencyUnpluggedPath
}
