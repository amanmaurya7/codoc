import { z } from "zod";

export const signupSchema = z.object({
  email: z.string().email(),
  username: z
    .string()
    .min(3, { message: "Min length of username should be 3" })
    .max(100, {
      message: "Max length of username should be less than or equal to 100",
    }),
  password: z
    .string()
    .min(6, { message: "password length should be greater than 6" }),
});
