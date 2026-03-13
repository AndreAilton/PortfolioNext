"use client";

import React from "react";
import SectionHeading from "./ui/section-heading";
import { motion } from "motion/react";
import { useTranslation } from "@/lib/i18n";

export default function About() {
  const { t } = useTranslation();

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
      viewport={{ once: true }}
    >
      <SectionHeading>{t.about.title}</SectionHeading>
      <p className="mb-3 text-lg text-gray-700 dark:text-gray-300">
        {t.about.description1}
      </p>
      <p className="text-lg text-gray-700 dark:text-gray-300">
        {t.about.description2}
      </p>
    </motion.section>
  );
}
