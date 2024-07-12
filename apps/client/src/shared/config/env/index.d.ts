import type { z } from "zod"

import type { clientEnvSchema } from "./model/client-env"
import type { serverEnvSchema } from "./model/server-env"

declare global {
	namespace NodeJS {
		interface ProcessEnv
			extends Readonly<z.infer<typeof serverEnvSchema & typeof clientEnvSchema>> {}
	}
}
