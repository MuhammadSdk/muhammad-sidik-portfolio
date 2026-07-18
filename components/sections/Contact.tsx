"use client";

import { useLanguage } from "@/context/LanguageContext";

import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const { content } = useLanguage();

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      {/* Heading */}

      <div className="text-center">

        <span className="font-semibold text-blue-600">
          {content.contactSection.badge}
        </span>

        <h2 className="mt-3 text-5xl font-bold text-zinc-900 dark:text-white">
          {content.contactSection.title}
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          {content.contactSection.description}
        </p>

      </div>

      {/* Cards */}

      <div className="mt-16 grid gap-6 md:grid-cols-2">

        {/* Email */}

        <a
          href="mailto:ltcnsnadidi@gmail.com"
          className="group rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
        >

          <Mail
            className="mb-5 text-blue-600 group-hover:scale-110 transition"
            size={34}
          />

          <h3 className="text-xl font-semibold">
            {content.contactSection.email}
          </h3>

          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            ltcnsnadidi@gmail.com
          </p>

        </a>

        {/* LinkedIn */}

        <a
          href="https://www.linkedin.com/in/m-sidik-25aa02275"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
        >

          <FaLinkedin
            className="mb-5 text-blue-600 group-hover:scale-110 transition"
            size={34}
          />

          <h3 className="text-xl font-semibold">
            {content.contactSection.linkedin}
          </h3>

          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            M Sidik
          </p>

        </a>

        {/* GitHub */}

        <a
          href="https://github.com/MuhammadSdk"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
        >

          <FaGithub
            className="mb-5 text-blue-600 group-hover:scale-110 transition"
            size={34}
          />

          <h3 className="text-xl font-semibold">
            {content.contactSection.github}
          </h3>

          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            MuhammadSdk
          </p>

        </a>

        {/* Location */}

        <div className="rounded-3xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900">

          <MapPin
            className="mb-5 text-blue-600"
            size={34}
          />

          <h3 className="text-xl font-semibold">
            {content.contactSection.location}
          </h3>

          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Yogyakarta, Indonesia
          </p>

          <span className="mt-5 inline-flex rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400">
            {content.contactSection.open}
          </span>

        </div>

      </div>

    </section>
  );
}