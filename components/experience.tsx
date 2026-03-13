"use client";

import React from "react";
import SectionHeading from "./ui/section-heading";
import { EXPERIENCE_DATA } from "@/lib/data";
import { motion } from "motion/react";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>{t.experience.title}</SectionHeading>
      <div className="flex flex-col gap-8 relative max-w-[53rem]">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>

        {EXPERIENCE_DATA.map((item, index) => {
          const translatedItem = t.experience.items[index] || item;
          return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-0 sm:pl-20"
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 -translate-x-1/2 top-0 w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 border-4 border-white dark:border-gray-950 hidden sm:block z-10"></div>

            <div className="bg-white/60 border border-black/5 rounded-lg p-6 dark:bg-white/10 dark:hover:bg-white/20 transition cursor-default">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                <h3 className="font-semibold capitalize text-xl">{translatedItem.title}</h3>
                <span className="text-sm text-gray-500 dark:text-white/60 flex items-center gap-1">
                    <Calendar size={14} />
                    {item.date}
                </span>
              </div>
              <p className="font-normal !mt-0 text-gray-700 dark:text-white/75 flex items-center gap-1 mb-4">
                 <MapPin size={14} />
                 {translatedItem.location}
              </p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
                {translatedItem.description}
              </p>
            </div>
          </motion.div>
        )})}
      </div>
    </section>
  );
}
