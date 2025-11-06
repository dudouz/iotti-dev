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
import { useContactForm } from "@/lib/hooks/use-contact";

const FORM_ID = "contact-form";

export const ContactForm = () => {
  const {
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  const { mutate, isPending, isSuccess, isError, error } = useContactForm();

  const onSubmit = async (data: FormData) => {
    mutate(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <div className="justify-center flex items-center">
      <div className="rounded-md max-w-sm flex flex-col border p-8 gap-4 min-w-[600px]">
        <p>I&apos;m open to work, let&apos;s connect</p>

        {isSuccess && (
          <div className="p-4 rounded-md bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
            Message sent successfully! I&apos;ll get back to you soon.
          </div>
        )}

        {isError && (
          <div className="p-4 rounded-md bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
            {error?.message || "Failed to send message. Please try again."}
          </div>
        )}

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
          <Button className="gap-4 w-full" type="submit" disabled={isPending}>
            {isPending ? "Sending..." : "Send message"}{" "}
            {!isPending && <MoveRight className="w-4 h-4" />}
          </Button>
        </form>
      </div>
    </div>
  );
};
