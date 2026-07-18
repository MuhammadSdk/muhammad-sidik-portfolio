"use client";

import Link from "next/link";
import Image from "next/image";

import ThemeToggle from "@/components/ui/ThemeToggle";
import LanguageToggle from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const { content } = useLanguage();

  return (
    <header className="sticky top-6 z-50 flex justify-center">
      <nav className="flex w-full max-w-6xl items-center justify-between rounded-full border border-zinc-200 bg-white/80 px-6 py-3 shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80">

        {/* Left */}
        <div className="flex items-center gap-3">

          <Image
            src="/images/profile.jpg"
            alt="Profile"
            width={42}
            height={42}
            className="rounded-full object-cover"
          />

          <div>
            <h2 className="font-semibold text-zinc-900 dark:text-white">
              Muhammad Sidik
            </h2>

            <p className="text-sm text-zinc-500">
              Frontend Developer
            </p>
          </div>

        </div>

        {/* Center */}
        <div className="hidden gap-8 md:flex">

          <Link
            href="#about"
            className="transition hover:text-blue-600"
          >
            {content.navbar.about}
          </Link>

          <Link
            href="#projects"
            className="transition hover:text-blue-600"
          >
            {content.navbar.projects}
          </Link>

          <Link
            href="#journey"
            className="transition hover:text-blue-600"
          >
            {content.navbar.journey}
          </Link>

          <Link
            href="#contact"
            className="transition hover:text-blue-600"
          >
            {content.navbar.contact}
          </Link>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          <LanguageToggle />

          <ThemeToggle />

          <a
            href="/resume/Muhammad-Sidik-Latuconsina-CV.pdf"
            download
            className="rounded-full border border-blue-600 px-5 py-2 font-medium text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            {content.navbar.resume}
          </a>

        </div>

      </nav>
    </header>
  );
}