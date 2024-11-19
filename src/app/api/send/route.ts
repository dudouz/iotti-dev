import { EmailTemplate } from "@/core/contact/email-template";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

interface ExtendedNextApiRequest extends NextApiRequest {
  body: {
    name: string;
    email: string;
    message: string;
  };
}

// eslint-disable-next-line import/no-anonymous-default-export
export const POST = async (req: ExtendedNextApiRequest) => {
  const { name, email, message } = req.body;

  console.log("sending email");

  const { data, error } = await resend.emails.send({
    from: "Acme <onboarding@resend.dev>",
    to: ["delivered@resend.dev"],
    subject: "Hello world",
    react: EmailTemplate({ name, email, message }),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    data,
  });
};
