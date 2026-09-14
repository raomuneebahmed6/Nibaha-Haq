"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { mainNav, servicesDropdown, coursesDropdown } from "@/lib/data/nav";
import { siteConfig } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setMobileExpanded(null);
  }

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const dropdowns: Record<string, typeof servicesDropdown> = {
    Services: servicesDropdown,
    Courses: coursesDropdown,
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-border bg-white/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-white",
      )}
    >
      <Container>
        <nav className="flex h-18 items-center justify-between py-3" aria-label="Main navigation">
          <Link href="/" className="group flex items-center gap-2 text-lg font-bold tracking-tight text-ink">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-primary-dark text-sm font-bold text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
              NH
            </span>
            {siteConfig.shortName}
          </Link>

          <ul className="hidden items-center gap-1 lg:flex">
            {mainNav.map((link) => {
              const dropdown = dropdowns[link.label];
              const isActive = pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

              if (dropdown) {
                const isOpen = openDropdown === link.label;
                return (
                  <li
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      type="button"
                      className={cn(
                        "flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                        isActive ? "text-primary" : "text-ink/75 hover:text-primary",
                      )}
                      aria-expanded={isOpen}
                      onClick={() => setOpenDropdown(isOpen ? null : link.label)}
                    >
                      {link.label}
                      <ChevronDown className={cn("h-3.5 w-3.5 transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
                    </button>
                    {isActive ? (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    ) : null}
                    <AnimatePresence>
                      {isOpen ? (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full grid w-64 grid-cols-1 gap-1 rounded-2xl border border-border bg-white p-2 shadow-xl"
                        >
                          {dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="rounded-xl px-4 py-2.5 text-sm text-ink/75 hover:bg-surface hover:text-primary"
                            >
                              {item.label}
                            </Link>
                          ))}
                          <Link
                            href={link.href}
                            className="mt-1 rounded-xl border-t border-border px-4 py-2.5 text-sm font-semibold text-primary hover:bg-surface"
                          >
                            View all {link.label.toLowerCase()}
                          </Link>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </li>
                );
              }

              return (
                <li key={link.href} className="relative">
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isActive ? "text-primary" : "text-ink/75 hover:text-primary",
                    )}
                  >
                    {link.label}
                  </Link>
                  {isActive ? (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-primary to-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  ) : null}
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:block">
            <ButtonLink href="/get-a-quote" variant="primary">
              Get a Quote
            </ButtonLink>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full text-ink lg:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-border bg-white lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {mainNav.map((link) => {
                const dropdown = dropdowns[link.label];
                if (dropdown) {
                  const isExpanded = mobileExpanded === link.label;
                  return (
                    <div key={link.label}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left text-base font-medium text-ink"
                        aria-expanded={isExpanded}
                        onClick={() => setMobileExpanded(isExpanded ? null : link.label)}
                      >
                        {link.label}
                        <ChevronDown className={cn("h-4 w-4 transition-transform", isExpanded && "rotate-180")} aria-hidden="true" />
                      </button>
                      {isExpanded ? (
                        <div className="flex flex-col gap-0.5 pb-2 pl-4">
                          {dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className="rounded-lg px-3 py-2.5 text-sm text-ink/70 hover:text-primary"
                            >
                              {item.label}
                            </Link>
                          ))}
                          <Link href={link.href} className="rounded-lg px-3 py-2.5 text-sm font-semibold text-primary">
                            View all {link.label.toLowerCase()}
                          </Link>
                        </div>
                      ) : null}
                    </div>
                  );
                }
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-xl px-3 py-3 text-base font-medium text-ink hover:text-primary"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <ButtonLink href="/get-a-quote" variant="primary" className="mt-3 w-full">
                Get a Quote
              </ButtonLink>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
