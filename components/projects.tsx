"use client";

import React, { useRef, useState } from "react";
import { PROJECTS_DATA } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import SectionHeading from "./ui/section-heading";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/lib/i18n";

type ProjectProps = (typeof PROJECTS_DATA)[number] & {
  translatedTitle?: string;
  translatedDescription?: string;
  descBtnText?: string;
};

function Project({
  title,
  description,
  tags,
  imageUrl,
  githubUrl,
  demoUrl,
  translatedTitle,
  translatedDescription,
  descBtnText,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const [isDescOpen, setIsDescOpen] = useState(false);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <article className="bg-white/60 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[22rem] hover:bg-white/80 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20 flex flex-col sm:block">
        
        {/* Mobile Image */}
        <div className="block sm:hidden w-full h-48 relative">
          <Image
            src={imageUrl}
            alt={translatedTitle || title}
            fill
            className="object-cover"
            quality={95}
          />
        </div>

        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{translatedTitle || title}</h3>
          
          <div className="mt-2">
            <button 
              onClick={() => setIsDescOpen(!isDescOpen)}
              className="flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white/70 hover:underline outline-none"
            >
              {descBtnText || "Descrição do projeto"}
              <ChevronDown className={cn("w-4 h-4 transition-transform", isDescOpen && "rotate-180")} />
            </button>
            
            <div 
              className={cn(
                "transition-all duration-300 overflow-y-auto scrollbar-hide",
                isDescOpen ? "max-h-[8rem] mt-2 opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <p className="leading-relaxed text-gray-700 dark:text-white/70 text-sm pb-2">
                {translatedDescription || description}
              </p>
            </div>
          </div>

          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-4">
             <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white/70 hover:text-black dark:hover:text-white transition">
                <Github size={20} />
             </a>
             <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="text-gray-700 dark:text-white/70 hover:text-black dark:hover:text-white transition">
                <ExternalLink size={20} />
             </a>
          </div>
        </div>

        <Image
          src={imageUrl}
          alt={translatedTitle || title}
          quality={95}
          width={400}
          height={300}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] h-[28.25rem] object-cover rounded-t-lg shadow-2xl
        transition
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial]
        group-even:-left-40"
        />
      </article>
    </motion.div>
  );
}

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t.projects.title}</SectionHeading>
      <div>
        {PROJECTS_DATA.map((project, index) => (
          <Project 
            key={index} 
            {...project} 
            translatedTitle={t.projects.items[index]?.title}
            translatedDescription={t.projects.items[index]?.description}
            descBtnText={t.projects.descBtn}
          />
        ))}
      </div>
    </section>
  );
}
