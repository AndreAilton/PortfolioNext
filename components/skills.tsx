"use client";

import React from "react";
import SectionHeading from "./ui/section-heading";
import { SKILLS_DATA } from "@/lib/data";
import { motion } from "motion/react";
import { useTranslation } from "@/lib/i18n";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>{t.skills.title}</SectionHeading>
      
      <div className="mb-10">
        <h3 className="text-xl font-medium mb-6 text-gray-800 dark:text-gray-200">
          {t.skills.hard}
        </h3>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {SKILLS_DATA.hard.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.li
                    className="bg-white/80 borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80 flex items-center gap-2"
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    custom={index}
                >
                    {/* Passamos o hex direto na prop color. Se não houver, ele herda a cor do texto */}
                    <Icon className="text-xl" color={'color' in skill ? skill.color : undefined} /> 
                    {skill.name}
                </motion.li>
              );
            })}
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-medium mb-6 text-gray-800 dark:text-gray-200">
          {t.skills.soft}
        </h3>
        <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
            {t.skills.softItems.map((skill, index) => (
            <motion.li
                className="bg-white/60 borderBlack rounded-xl px-5 py-3 dark:bg-white/5 dark:text-white/60 text-sm"
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                once: true,
                }}
                custom={index + SKILLS_DATA.hard.length}
            >
                {skill}
            </motion.li>
            ))}
        </ul>
      </div>
    </section>
  );
}
