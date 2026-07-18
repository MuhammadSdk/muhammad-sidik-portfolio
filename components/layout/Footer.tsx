import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row">

        {/* Left */}
        <div>
          <h2 className="text-2xl font-bold">
            Muhammad Sidik Latuconsina
          </h2>

          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Frontend Developer • Full Stack Enthusiast
          </p>

          <p className="mt-4 text-sm text-zinc-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-6">

          <a
            href="mailto:ltcnsnadidi@gmail.com"
            className="transition hover:text-blue-600"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>

          <a
            href="https://github.com/MuhammadSdk"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-600"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/m-sidik-25aa02275"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-blue-600"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>

        </div>

      </div>
    </footer>
  );
}