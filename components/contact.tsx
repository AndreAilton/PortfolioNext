"use client";

import React from "react";
import SectionHeading from "./ui/section-heading";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function Contact() {
  const { t } = useTranslation();

  const formSchema = z.object({
    email: z.string().email({ message: t.contact.emailError }),
    message: z.string().min(10, { message: t.contact.msgError }).max(5000),
  });

  type FormData = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form Data:", data);
    alert(t.contact.successMsg);
    reset();
  };

  return (
    <motion.section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>{t.contact.title}</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        {t.contact.desc1}{" "}
        <a className="underline" href="mailto:andre.ailtonc.10@gmail.com">
          andre.ailtonc.10@gmail.com
        </a>{" "}
        {t.contact.desc2}
      </p>

      <form
        className="mt-10 flex flex-col"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-4 text-left">
            <input
            className="h-14 px-4 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-gray-300 dark:focus:ring-gray-300 transition-all outline-none w-full"
            type="email"
            placeholder={t.contact.emailPlaceholder}
            {...register("email")}
            />
            {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
        </div>

        <div className="mb-4 text-left">
            <textarea
            className="h-52 my-3 rounded-lg border border-gray-300 bg-white p-4 text-gray-900 focus:border-gray-900 focus:ring-1 focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-gray-300 dark:focus:ring-gray-300 transition-all outline-none w-full"
            placeholder={t.contact.msgPlaceholder}
            {...register("message")}
            />
            {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
            )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 disabled:scale-100 disabled:bg-opacity-65 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200"
        >
          {isSubmitting ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white dark:border-gray-900"></div>
          ) : (
            <>
              {t.contact.sendBtn}{" "}
              <Send className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
}
