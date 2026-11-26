import { z } from "zod";

const optionalText = z.preprocess(
    (value) => (value === "" ? undefined : value),
    z.string().optional(),
);

const registerSchema = z.object({
    firstName: z
      .string()
      .trim()
      .min(1, "First name is required"),

    lastName: z
      .string()
      .trim()
      .min(1, "Last name is required"),

    email: z
      .string()
      .trim()
      .email("Please enter a valid email address")
      .toLowerCase(),

    phoneNumber: z
      .string()
      .min(1, "Phone number is required"),

    dateOfBirth: z
      .string()
      .min(1, "Date of birth is required")
      .refine(
        (value) =>
            /^\d{4}-\d{2}-\d{2}$/.test(value)  &&
        !Number.isNaN(Date.parse(value)),
        "Please enter a valid date",
      ),
      
    gender: z
      .enum(["male", "female", "other"],
        {
            error: "Please select a valid gender",
        }),

    documentType: z.preprocess(
        (value) => (value === "" ? undefined : value),
        z.enum(["nic", "passport"]).optional(),
    ),

    documentNumber: optionalText,

    password: z
      .string()
      .min(8, "Password must contain at least 8 characters"),
});

export default registerSchema;