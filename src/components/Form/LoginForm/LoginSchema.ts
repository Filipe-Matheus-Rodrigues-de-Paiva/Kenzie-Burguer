import { z } from "zod"

export const loginSchema = z.object({
  email: z.string().nonempty("Campo obrigatório").email("Forneça um email válido"),
  password: z.string().nonempty("Campo obrigatório")
})

export type TLoginFormValues = z.infer<typeof loginSchema>