import z from "zod"

export const clientEnvSchema = z.object({
	NEXT_PUBLIC_API_URL: z.string().url(),
})

clientEnvSchema.safeParse(process.env)
