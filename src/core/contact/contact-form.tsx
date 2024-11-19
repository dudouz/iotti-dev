"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { MoveRight } from "lucide-react";

import { Label } from "../primitives/label";
import { Button } from "../primitives/button";

import { Input } from "../primitives/input";
import { Textarea } from "../primitives/textarea";
import {
  ContactFormSchema,
  FIELD_NAME,
  FormFields,
  FormData,
  FIELD_EMAIL,
  FIELD_MESSAGE,
  errorMessages,
} from "./contact.schema";
import { Resend } from "resend";

const FORM_ID = "contact-form";

export const ContactForm = () => {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const onSubmit = (data: FormData) => {
    resend.emails.send({
      from: "contact@iotti.dev",
      to: "ddz.iotti@gmail.com",
      subject: `Message from: ${data.name} [iotti.dev]`,
      html: `<p>Name: ${data.name}</p><p>Email: ${data.email} </p> <p>${data.message}</p>`,
    });
  };

  return (
    <div className="justify-center flex items-center">
      <div className="rounded-md max-w-sm flex flex-col border p-8 gap-4 min-w-[600px]">
        <p>I&apos;m open to work, let&apos;s connect</p>

        <form
          id={FORM_ID}
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col items-center gap-4"
        >
          <div className="grid w-full items-center gap-1">
            <Label htmlFor="name">Your name</Label>
            <Input
              {...FormFields.FIELD_NAME}
              onChange={(e) => setValue(FIELD_NAME, e.currentTarget.value)}
            />
            {errors[FIELD_NAME] && (
              <span className="text-xs text-red-600">
                {errorMessages.FIELD_NAME}
              </span>
            )}
          </div>

          <div className="grid w-full items-center gap-1">
            <Label htmlFor="email">E-mail</Label>
            <Input
              {...FormFields.FIELD_EMAIL}
              onChange={(e) => setValue(FIELD_EMAIL, e.currentTarget.value)}
            />
            {errors[FIELD_EMAIL] && (
              <span className="text-xs text-red-600">
                {errorMessages.FIELD_EMAIL}
              </span>
            )}
          </div>

          <div className="grid w-full items-center gap-1">
            <Label htmlFor="message">Leave a message</Label>
            <Textarea
              {...FormFields.FIELD_MESSAGE}
              onChange={(e) => setValue(FIELD_MESSAGE, e.currentTarget.value)}
            />
            {errors[FIELD_MESSAGE] && (
              <span className="text-xs text-red-600">
                {errorMessages.FIELD_MESSAGE}
              </span>
            )}
          </div>
          <Button className="gap-4 w-full" type="submit">
            Send message <MoveRight className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};
