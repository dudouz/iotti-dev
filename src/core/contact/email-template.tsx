import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  message,
}) => (
  <div>
    <h1>iotti.dev - contact form</h1>
    <hr />

    <h2>Message from, {name}!</h2>
    <p>Email: {email}</p>
    <p>Message: {message} </p>
  </div>
);
