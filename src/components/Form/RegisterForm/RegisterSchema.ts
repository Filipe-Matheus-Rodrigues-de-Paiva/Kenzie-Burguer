import { z } from "zod"

export const registerSchema = z.object({
  name: z.string().nonempty("Campo obrigatório"),
  email: z.string().nonempty("Campo obrigatório").email("Forneça um email válido"),
  password: z.string().nonempty("Campo obrigatório").min(7, "É preciso de no mínimo 7 caracteres")
  .regex(/(?=.*?[A-Z])/).min(1, "É preciso pelo menos uma letra maiúscula")
  .regex(/(?=.*?[a-z])/).min(1, "É preciso pelo menos uma letra minúscula")
  .regex(/(?=.*?[0-9])/).min(1, "É preciso pelo menos um número")
  .regex(/(?=.*?[\W])/).min(1, "É preciso pelo menos um caractere especial"),
  confirm: z.string().nonempty("Campo obrigatório")
}).refine(({password, confirm}) => confirm === password, {
  message: "As senhas não estão em conformidade",
  path: ["confirm"],
})

export type TRegisterFormValues = z.infer<typeof registerSchema>;