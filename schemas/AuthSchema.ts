import { z } from "zod";

const REQUIRED_FIELD_ERROR = "This field is required."

export const LoginSchema = z.object({
    email: z
        .string({ required_error: REQUIRED_FIELD_ERROR })
        .email({ message: "Entered email is not valid." }),
    password: z
        .string({ required_error: REQUIRED_FIELD_ERROR })
        .min(6, "Minimum of 6 characters required.")
})

export type LoginSchemaType = z.infer<typeof LoginSchema>