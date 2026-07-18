"use client";

import { createContext, useContext, useState } from "react";

import en from "@/data/en";
import id from "@/data/id";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const next = prev === "en" ? "id" : "en";
      console.log("CHANGE:", prev, "->", next);
      return next;
    });
  };

  const content = language === "en" ? en : id;

  console.log("CURRENT:", language);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        content,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}