"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/elements/Section";
import Link from "next/link";
import Image from "next/image";
import { links } from "./context";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [hash, setHash] = useState("");

  // Atualiza hash quando a URL muda
  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  // Scroll suave customizado
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.querySelector(hash);
    if (!element) return;

    const headerOffset = window.innerWidth >= 1024 ? 96 : 88; // desktop / mobile
    const targetPosition =
      element.getBoundingClientRect().top + window.scrollY - headerOffset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 800; // tempo em ms (quanto maior, mais lento)
    let startTime: number | null = null;

    const easeInOutQuad = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuad(progress);

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hash]);

  return (
    <Section
      asTag="header"
      className="md:fixed top-0 left-0 w-full h-[96px] lg:h-[88px] flex items-center z-50 bg-white shadow-md"
    >
      <div className="flex justify-center md:justify-between w-full">
        <div className="md:pt-4 lg:pt-0 flex items-end lg:items-center justify-center lg:justify-between">
          <Link
            href="/"
            className="relative w-51 h-9"
            onClick={() => setHash("")}
          >
            <Image
              fill
              alt="Blue Monster"
              src="/images/logos/logo.svg"
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>
        </div>

        {/* Menu */}
        <nav className="flex gap-8 items-center">
          {links.map(({ href, label }) => {
            const [base, anchor] = href.split("#");

            let isActive = false;

            if (href === "/") {
              isActive = pathname === "/" && hash === "";
            } else if (anchor) {
              isActive = pathname === base && hash === `#${anchor}`;
            } else {
              isActive = pathname === base;
            }

            return (
              <Link
                key={href}
                href={href}
                onClick={(e) => {
                  if (anchor) {
                    e.preventDefault(); // evita jump instantâneo
                    setHash(`#${anchor}`);
                    router.push(`${base}#${anchor}`); // atualiza URL sem recarregar
                  } else {
                    setHash("");
                    router.push(base);
                  }
                }}
                className={`hidden md:block ${
                  isActive ? "font-bold" : "font-normal"
                } text-grayscale-400`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
      </div>
    </Section>
  );
}
