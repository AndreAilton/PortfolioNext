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
      // Fundo e texto adaptativos: claro por padrão, dark: para tema escuro
      className="w-full min-h-screen flex items-center justify-center  dark:bg-zinc-950 text-gray-900 dark:text-white px-6 scroll-mt-[100rem]"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center pt-28 md:pt-0">

        {/* --- Coluna da Esquerda: Texto e Botões --- */}
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            {t.hero.greeting}{" "}
            <span className="text-blue-600 dark:text-blue-500">{HERO_DATA.name}</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-zinc-300 font-medium">
            {t.hero.role}
          </h2>

          <p className="text-gray-600 dark:text-zinc-400 max-w-xl leading-relaxed">
            {t.hero.description}
          </p>

          {/* Botões Principais */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#projects"
              // Botão primário mantido com cores sólidas (branco no claro, azul no escuro)
              className="group flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
            >
              {t.hero.viewProjectsBtn}
              <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition" />
            </Link>

            <Link
              href="#contact"
              // Botão secundário adaptativo (borda cinza claro no tema claro)
              className="px-6 py-3 border border-gray-300 dark:border-zinc-700 hover:border-blue-600 dark:hover:border-blue-500 rounded-lg transition"
            >
              {t.hero.contactBtn}
            </Link>
          </div>

          {/* Redes Sociais e CV (Integrados de forma limpa ao novo design) */}
          <div className="flex items-center gap-5 pt-4 border-t border-gray-200 dark:border-zinc-800/50 mt-4">
            <a
              className="text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition flex items-center gap-2 text-sm group"
              href="/Curriculo_Andre.pdf"
              download
            >
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition" /> 
              {t.hero.downloadCv}
            </a>
            
            <div className="w-1 h-1 rounded-full bg-gray-300 dark:bg-zinc-700"></div> {/* Separador visual */}

            <div className="flex gap-4">
              <a
                className="text-gray-500 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-500 transition hover:scale-110"
                href={HERO_DATA.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                className="text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition hover:scale-110"
                href={HERO_DATA.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* --- Coluna da Direita: Foto em Destaque --- */}
        <motion.div 
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative">
            {/* Mantivemos o Next/Image para melhor performance e LCP */}
            <Image
              src="/images/hero-foto.png" // Confirme se o nome do arquivo na pasta public está exatamente assim
              alt={`Foto de ${HERO_DATA.name}`}
              width={384} // Equivalente a w-96
              height={500}
              quality={95}
              priority={true}
              // Adicionei w-72 md:w-96 rounded-2xl object-cover shadow-2xl que faltavam no seu código
              className="w-72 md:w-96  object-cover  border-gray-200 dark:border-zinc-800/50 relative z-10"
            />

            {/* Glow decorativo - Mais sutil no tema claro e mantido como antes no escuro */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 blur-3xl rounded-full z-0 pointer-events-none"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}