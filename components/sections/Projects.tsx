"use client";

import { useLanguage } from "@/context/LanguageContext";
import { FaGithub } from "react-icons/fa";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";

const projects = [
  {
    title: "InternHub",

    description:
      "A modern internship management system built with Next.js, TypeScript, Tailwind CSS, Prisma, and PostgreSQL.",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
    ],

    github: "https://github.com/MuhammadSdk/internhub-nextjs",

    demo: "https://internhub-nextjs.vercel.app/",

    image: "/images/internhub.png",  
  },
{
    title: "Website Joglo Dhepis",

    description:
      "A modern company profile website developed for Joglo Dhepis. The website showcases the business, facilities, gallery, and contact information with a clean and responsive interface.",

    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Framer Motion",
    ],

    github: "",

    demo: "https://joglodhepis.vercel.app/",

    image: "/images/joglodhepis.png",
  },
];

export default function Projects() {
  const { content } = useLanguage();

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mb-16">

        <span className="font-semibold text-blue-600">
          {content.projectsSection.badge}
        </span>

        <h2 className="mt-3 text-5xl font-bold">
          {content.projectsSection.title}
        </h2>

        <p className="mt-5 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {content.projectsSection.description}
        </p>

      </div>

      <div className="space-y-10">

        {projects.map((project) => (

          <div
            key={project.title}
            className="rounded-3xl border border-zinc-200 bg-white p-10 shadow-lg transition hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900"
          >

            <div className="grid gap-10 lg:grid-cols-2">

              <div>

                <h3 className="text-3xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-6 leading-8 text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="mt-10 flex gap-4">

                  <a
                    href={project.demo}
                    target="_blank"
                    className="flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                  >
                    <HiOutlineArrowTopRightOnSquare />

                    {content.projectsSection.demo}
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    className="flex items-center gap-2 rounded-full border border-zinc-300 px-6 py-3 font-semibold transition hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                  >
                    <FaGithub />

                    {content.projectsSection.github}
                  </a>

                </div>

              </div>

              <div className="flex items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800">

                <p className="text-zinc-400">
                  {content.projectsSection.screenshot}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}