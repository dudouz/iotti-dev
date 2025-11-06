"use client";

import { useMutation } from "@tanstack/react-query";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

async function sendContactForm(data: ContactFormData) {
  const response = await fetch("/api/contact.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Failed to send message");
  }

  return response.json();
}

export function useContactForm() {
  return useMutation({
    mutationFn: sendContactForm,
  });
}
