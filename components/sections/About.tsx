"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
} from "react-icons/si";

function TechItem({
  icon,
  name,
}: {
  icon: React.ReactNode;
  name: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3 transition duration-300 hover:-translate-y-1 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800">
      <div className="text-3xl text-blue-600">
        {icon}
      </div>

      <span className="font-medium">
        {name}
      </span>
    </div>
  );
}

export default function About() {
  const { content } = useLanguage();

  return (
    <section
      id="about"
      className="scroll-mt-28 mx-auto max-w-7xl px-6 py-24"
    >
      <div className="grid gap-8 lg:grid-cols-3">

        {/* About Card */}

        <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-zinc-900 lg:col-span-2">

          <div className="grid items-center gap-8 md:grid-cols-2">

            <div className="flex justify-center">

              <Image
                src="/images/profile.jpg"
                alt="Profile"
                width={280}
                height={350}
                priority
                className="rounded-3xl object-cover"
              />

            </div>

            <div>

              <span className="font-semibold text-blue-600">
                {content.about.badge}
              </span>

              <h2 className="mt-4 text-4xl font-bold">
                {content.about.title}
              </h2>

              <p className="mt-2 font-medium text-blue-600">
                {content.about.role}
              </p>

              <p className="mt-6 leading-8 text-zinc-600 dark:text-zinc-400">
                {content.about.description}
              </p>

            </div>

          </div>

        </div>

        {/* Tech Stack */}

        <div className="rounded-3xl bg-white p-8 shadow-lg dark:bg-zinc-900">

          <h3 className="text-2xl font-bold">
            {content.about.tech}
          </h3>

          <div className="mt-8 grid grid-cols-2 gap-4">

            <TechItem
              icon={<FaReact />}
              name="React"
            />

            <TechItem
              icon={<SiNextdotjs />}
              name="Next.js"
            />

            <TechItem
              icon={<SiTypescript />}
              name="TypeScript"
            />

            <TechItem
              icon={<SiTailwindcss />}
              name="Tailwind"
            />

            <TechItem
              icon={<FaGitAlt />}
              name="Git"
            />

            <TechItem
              icon={<FaGithub />}
              name="GitHub"
            />

            <TechItem
              icon={<FaNodeJs />}
              name="Node.js"
            />

            <TechItem
              icon={<SiPostgresql />}
              name="PostgreSQL"
            />

            <TechItem
              icon={<SiPrisma />}
              name="Prisma"
            />

          </div>

        </div>

      </div>
    </section>
  );
}