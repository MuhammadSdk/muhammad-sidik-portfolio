"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { content, language } = useLanguage();

  console.log(language);

  return (
    <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6">
      <div className="grid w-full items-center gap-16 lg:grid-cols-2">

        {/* Left */}
        <div>

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            {content.hero.badge}
          </span>

          <h1 className="mt-8 text-6xl font-bold leading-tight text-zinc-900 dark:text-white">
            Muhammad Sidik
            <br />
            Latuconsina
          </h1>

          <p className="mt-4 text-2xl font-semibold text-blue-600">
            {content.hero.role}
          </p>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            {content.hero.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="/resume/Muhammad-Sidik-Latuconsina-CV.pdf"
              download
              className="rounded-full bg-black px-6 py-3 text-white transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              {content.hero.download}
            </a>

            <a
              href="#projects"
              className="rounded-full border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
            >
              {content.hero.projects}
            </a>

          </div>

        </div>

        {/* Right */}
        <div className="flex justify-center">

          <div className="relative">

            <div className="absolute -left-8 top-10 h-24 w-24 rounded-full bg-blue-500"></div>

            <div className="absolute bottom-5 -right-8 h-20 w-20 rounded-full bg-yellow-400"></div>

            <div className="overflow-hidden rounded-[40px] border-8 border-white shadow-2xl">

              <Image
                src="/images/profile.jpg"
                alt="Muhammad Sidik Latuconsina"
                width={420}
                height={520}
                className="object-cover"
                priority
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}