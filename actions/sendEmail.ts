// actions/sendEmail.ts
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: { email: string; message: string }) => {
  try {
    const data = await resend.emails.send({
      from: "Portfólio Contato <onboarding@resend.dev>", 
      to: "andre.ailtonc.10@gmail.com", 
      subject: "Nova mensagem do seu Portfólio!",
      replyTo: formData.email, // <-- A correção está aqui: replyTo em vez de reply_to
      text: `Você recebeu uma nova mensagem de: ${formData.email}\n\nMensagem:\n${formData.message}`,
    });

    return { success: true, data };
  } catch (error) {
    return { error: "Erro ao enviar o email." };
  }
};