import z from "zod"

const serverEnvSchema = z.object({})

serverEnvSchema.safeParse(process.env)
