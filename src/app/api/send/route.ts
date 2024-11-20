import { EmailTemplate } from "@/core/contact/email-template";
import { NextApiRequest } from "next";
import { NextResponse, NextRequest } from "next/server";

import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

type ExtendedNextApiRequest = NextRequest["body"] & {
  body: {
    name: string;
    email: string;
    message: string;
  };
};

export const POST = async (req: NextRequest) => {
  const { name, email, message } =
    req.body as unknown as ExtendedNextApiRequest["body"];

  const { data, error } = await resend.emails.send({
    from: "Iotti.dev <contact@iotti.dev>",
    to: ["ddz.iotti@gmail.com"],
    subject: `Contact from ${name} - ${email} [iotti.dev]`,
    react: EmailTemplate({ name, email, message }),
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({
    data,
  });
};
