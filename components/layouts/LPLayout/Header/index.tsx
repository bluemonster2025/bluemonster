"use client";

import { useEffect, useState } from "react";
import { Section } from "@/components/elements/Section";
import Link from "next/link";
import Image from "next/image";
import { links } from "./context";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const updateHash = () => setHash(window.location.hash);
    updateHash(); // pega hash inicial
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <Section
      asTag="header"
      className="w-full h-[96px] lg:h-[88px] flex items-center z-50 bg-white"
    >
      <div className="flex justify-between w-full">
        {/* Logo */}
        <div className="md:pt-4 lg:pt-0 flex items-end lg:items-center justify-center lg:justify-between">
          <Link
            href="/"
            className="relative w-40 h-8"
            onClick={() => setHash("")} // força hash vazio ao clicar no logo
          >
            <Image
              fill
              alt="Blue Monster"
              src="/images/logos/logo.svg"
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>

        {/* Menu */}
        <nav className="flex gap-8 items-center">
          {links.map(({ href, label }) => {
            const [base, anchor] = href.split("#");

            let isActive = false;

            if (href === "/") {
              // Home ativo apenas quando pathname é "/" e sem hash
              isActive = pathname === "/" && hash === "";
            } else if (anchor) {
              // links de âncora ativos quando pathname bate e hash bate
              isActive = pathname === base && hash === `#${anchor}`;
            } else {
              // links normais ativos quando pathname bate
              isActive = pathname === base;
            }

            return (
              <Link
                key={href}
                href={href}
                onClick={() => {
                  if (href === "/") {
                    setHash(""); // Home
                  } else if (anchor) {
                    setHash(`#${anchor}`); // âncoras
                  }
                }}
                className={`${
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
