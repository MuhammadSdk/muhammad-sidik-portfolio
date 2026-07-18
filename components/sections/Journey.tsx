"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Journey() {
  const { content } = useLanguage();

  const journey = content.journey.items;

  return (
    <section
      id="journey"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      {/* Heading */}
      <div className="mb-20 text-center">
        <span className="font-semibold text-blue-600">
          {content.journey.badge}
        </span>

        <h2 className="mt-3 text-5xl font-bold">
          {content.journey.title}
        </h2>
      </div>

      {/* Timeline */}
      <div className="relative mx-auto max-w-5xl">

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-[2px] -translate-x-1/2 bg-zinc-200 dark:bg-zinc-700 md:block"></div>

        <div className="space-y-20">

          {journey.map((item: any, index: number) => (
            <div
              key={index}
              className={`relative flex items-center ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              {/* Dot */}
              <div className="absolute left-1/2 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-blue-600 shadow md:block dark:border-zinc-900"></div>

              {/* Card */}
              <div className="w-full md:w-[44%]">
                <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-800 dark:bg-zinc-900">

                  <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                    {item.year}
                  </p>

                  <h3 className="mt-3 text-3xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-5 leading-8 text-zinc-600 dark:text-zinc-400">
                    {item.description}
                  </p>

                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}