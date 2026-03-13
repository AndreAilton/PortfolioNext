"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "pt" | "en";

type LanguageContextType = {
  language: Language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("pt");

  useEffect(() => {
    const localLanguage = window.localStorage.getItem("language") as Language | null;
    if (localLanguage) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(localLanguage);
    } else {
      const browserLang = navigator.language.startsWith("pt") ? "pt" : "en";
       
      setLanguage(browserLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "pt" ? "en" : "pt";
    setLanguage(newLanguage);
    window.localStorage.setItem("language", newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === null) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
