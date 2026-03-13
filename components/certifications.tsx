"use client";

import React from "react";
import SectionHeading from "./ui/section-heading";
import { CERTIFICATIONS_DATA } from "@/lib/data";
import { motion } from "motion/react";
import { Award, Calendar, ExternalLink } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function Certifications() {
  const { t } = useTranslation();

  return (
    <section id="certifications" className="scroll-mt-28 mb-28 sm:mb-40 w-full max-w-[53rem]">
      <SectionHeading>{t.certifications.title}</SectionHeading>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {CERTIFICATIONS_DATA.map((item, index) => {
          const translatedItem = t.certifications.items[index] || item;
          return (
            <motion.a
              href={item.link !== "#" ? item.link : undefined}
              target={item.link !== "#" ? "_blank" : undefined}
              rel={item.link !== "#" ? "noopener noreferrer" : undefined}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/60 border border-black/5 rounded-lg p-6 dark:bg-white/10 dark:hover:bg-white/20 transition flex flex-col h-full hover:shadow-md cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors">
                    <Award className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{translatedItem.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{translatedItem.issuer}</p>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-white/75 text-sm mb-6 flex-grow">
                {translatedItem.description}
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-500 dark:text-white/60 flex items-center gap-1">
                  <Calendar size={14} />
                  {item.date}
                </span>
                
                {item.link && item.link !== "#" && (
                  <div 
                    className="text-sm font-medium flex items-center gap-1 text-gray-900 dark:text-gray-100 group-hover:underline group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                  >
                    {t.certifications.viewBtn}
                    <ExternalLink size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </div>
                )}
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
