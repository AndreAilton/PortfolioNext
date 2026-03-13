"use client";

import React from "react";
import { motion } from "motion/react";
import { NAV_LINKS } from "@/lib/data";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { LanguageToggle } from "./language-toggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useTranslation } from "@/lib/i18n";

export default function Header() {
  const { t } = useTranslation();
  type SectionName = (typeof NAV_LINKS)[number]["name"];
  const [activeSection, setActiveSection] = React.useState<SectionName>(NAV_LINKS[0].name);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const activeLink = NAV_LINKS.find(
              (link) => link.hash === `#${entry.target.id}`
            );
            if (activeLink) {
              setActiveSection(activeLink.name);
            }
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    NAV_LINKS.forEach((link) => {
      const id = link.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const getTranslatedName = (name: string) => {
    if (name === "Início") return t.nav.home;
    if (name === "Sobre") return t.nav.about;
    if (name === "Projetos") return t.nav.projects;
    if (name === "Habilidades") return t.nav.skills;
    if (name === "Experiência") return t.nav.experience;
    if (name === "Certificações") return t.nav.certifications;
    if (name === "Contato") return t.nav.contact;
    return name;
  };

  return (
    <header className="z-[999] relative">
      <motion.div
        className={cn(
          "fixed top-0 left-0 right-0 h-[4.5rem] w-full rounded-none border-b border-white/10 bg-white/80 dark:bg-gray-950/80 backdrop-blur-[0.5rem] transition-all sm:top-6 sm:mx-auto sm:h-[3.25rem] sm:w-[50rem] sm:rounded-full sm:border border-gray-200 dark:border-gray-800 shadow-lg shadow-black/[0.03]",
          !isScrolled && "sm:top-6 sm:w-full sm:max-w-5xl sm:bg-transparent sm:dark:bg-transparent sm:border-none sm:shadow-none sm:backdrop-blur-none"
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div>

      <nav className="fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 w-full sm:w-auto flex items-center justify-between px-4 sm:px-0 z-[999]">
        {/* Mobile Menu Toggle */}
        <div className="flex sm:hidden w-full justify-between items-center">
             <span className="font-bold text-lg">André Ailton</span>
             <div className="flex items-center gap-2">
                <LanguageToggle />
                <ThemeToggle />
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
             </div>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden sm:flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-3">
          {NAV_LINKS.map((link) => {
            const translatedName = getTranslatedName(link.name);
            return (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
            >
              <Link
                className={cn(
                  "flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 dark:hover:text-gray-300 transition",
                  activeSection === link.name && "text-gray-950 dark:text-gray-200"
                )}
                href={link.hash}
                onClick={() => setActiveSection(link.name)}
              >
                {translatedName}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-black/5 dark:bg-gray-800 rounded-full absolute inset-0 -z-10"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          )})}
          <li className="ml-2 flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
          </li>
        </ul>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-[4.5rem] left-0 w-full bg-[#f5f5f0] dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-lg p-4 sm:hidden flex flex-col gap-4 z-[998]"
        >
            {NAV_LINKS.map((link) => {
                const translatedName = getTranslatedName(link.name);
                return (
                <Link
                    key={link.hash}
                    href={link.hash}
                    className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white"
                    onClick={() => {
                        setActiveSection(link.name);
                        setIsMobileMenuOpen(false);
                    }}
                >
                    {translatedName}
                </Link>
            )})}
        </motion.div>
      )}
    </header>
  );
}
