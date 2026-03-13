"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { HERO_DATA } from "@/lib/data";
import { ArrowRight, Github, Linkedin, Download } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] pt-28 sm:pt-36 flex flex-col items-center justify-center min-h-[80vh]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="https://picsum.photos/seed/avatar/200/200"
              alt="Portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">{t.hero.greeting} {HERO_DATA.name}.</span> <span className="font-bold">{t.hero.role}</span>.{" "}
        <span className="text-gray-500 dark:text-gray-400 block mt-2 text-xl">
            {t.hero.description}
        </span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          {t.hero.contactBtn}{" "}
          <ArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white dark:bg-white/10 px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:border-white/10"
          href="/CV.pdf"
          download
        >
          {t.hero.downloadCv}{" "}
          <Download className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex gap-2">
            <a
            className="bg-white dark:bg-white/10 p-4 text-gray-700 dark:text-white/60 hover:text-gray-950 dark:hover:text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:border-white/10"
            href={HERO_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            >
            <Linkedin />
            </a>

            <a
            className="bg-white dark:bg-white/10 p-4 text-gray-700 dark:text-white/60 hover:text-gray-950 dark:hover:text-white flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:border-white/10"
            href={HERO_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            >
            <Github />
            </a>
        </div>
      </motion.div>
    </section>
  );
}
