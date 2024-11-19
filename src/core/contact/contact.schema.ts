import { z, ZodType } from "zod";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

export const FIELD_NAME = "name";
export const FIELD_EMAIL = "email";
export const FIELD_MESSAGE = "message";

export const errorMessages = {
  FIELD_MESSAGE: "Please leave more details.",
  FIELD_EMAIL: "Invalid format, please verify provided e-mail address",
  FIELD_NAME: "Please don't leave the name field blank.",
};

export const FormFields = {
  FIELD_EMAIL: {
    name: FIELD_EMAIL,
    placeholder: "Enter your e-mail",
    type: "text",
  },
  FIELD_NAME: {
    name: FIELD_NAME,
    placeholder: "Enter your name",
    type: "text",
  },
  FIELD_MESSAGE: {
    name: FIELD_MESSAGE,
    placeholder: "Add details about your project",
  },
};

export const ContactFormSchema: ZodType<FormData> = z.object({
  name: z.string().min(1, { message: errorMessages.FIELD_NAME }),
  email: z.string().email({ message: errorMessages.FIELD_EMAIL }),
  message: z.string().min(1, { message: errorMessages.FIELD_MESSAGE }),
});
