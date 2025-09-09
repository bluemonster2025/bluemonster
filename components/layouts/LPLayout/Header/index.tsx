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
    updateHash();
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  return (
    <Section
      asTag="header"
      className="w-full h-[96px] lg:h-[88px] flex items-center z-50 bg-white"
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
                onClick={() => {
                  if (href === "/") {
                    setHash(""); // Home
                  } else if (anchor) {
                    setHash(`#${anchor}`); // âncoras
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
