"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { navItems, site } from "@/lib/site";
import { ButtonLink } from "./ButtonLink";
import { FoundationLogo } from "./FoundationLogo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-forest bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-1 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center" aria-label="Montana Kush Community Foundation home">
          <FoundationLogo className="w-[142px] sm:w-[158px]" priority />
        </Link>
        <nav className="hidden items-center gap-3 lg:flex xl:gap-5" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] font-black uppercase tracking-[0.08em] text-forest transition hover:text-pine xl:text-xs"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.sponsorUrl}
            className="whitespace-nowrap text-[10px] font-black uppercase tracking-[0.06em] text-copper underline-offset-4 transition hover:text-forest hover:underline xl:text-[11px]"
            rel="noreferrer"
            target="_blank"
          >
            Supported by Montana Kush
          </a>
          <ButtonLink href="/donate" className="min-h-9 w-[112px] px-0 py-2 text-center text-[10px] tracking-[0.06em] xl:w-[122px] xl:text-[11px]">Get Involved</ButtonLink>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-forest/20 text-forest lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
      </div>
      {open ? (
        <div className="border-t border-forest/10 bg-parchment px-4 py-5 lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-base font-semibold text-forest hover:bg-forest/5"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/donate"
              className="mt-2 rounded-md bg-copper px-3 py-3 text-center text-sm font-bold uppercase tracking-[0.08em] text-white"
              onClick={() => setOpen(false)}
            >
              Get Involved
            </Link>
            <a
              href={site.sponsorUrl}
              className="rounded-md px-3 py-3 text-center text-sm font-bold text-copper"
              rel="noreferrer"
              target="_blank"
            >
              Supported by Montana Kush
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
