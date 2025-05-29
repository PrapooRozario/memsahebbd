"use client";
import { navdata1 } from "../../data/NavData1";
import { navdata2 } from "../../data/NavData2";
import { navdata3 } from "../../data/NavData3";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useClickAway } from "react-use";

export default function Navbar() {
  const [openSections, setOpenSections] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sectionModalRef = useRef<HTMLDivElement>(null);
  const sectionButtonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const navButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useClickAway(sectionModalRef, (e) => {
    if (sectionButtonRef.current?.contains(e.target as Node)) return;
    setOpenSections(false);
  });

  useClickAway(navRef, (e) => {
    if (navButtonRef.current?.contains(e.target as Node)) return;
    setOpenNav(false);
  });

  return (
    <header
      className={`sticky top-4 z-50 transition-all mt-4 rounded-2xl duration-300 ${
        scrolled ? "bg-white" : "bg-[rgba(217,207,254,0.3)]"
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="z-50">
          <Image
            src="/logo/Memsaheb.png"
            alt="Memshaheb Bangladesh"
            width={120}
            height={60}
            className="w-20 md:w-28 h-auto"
            priority
          />
        </Link>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8">
            {navdata1.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-lg font-medium text-gray-900 hover:text-[#FF5CBC] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}

            <li className="relative">
              <button
                ref={sectionButtonRef}
                onClick={() => setOpenSections(!openSections)}
                className="flex items-center cursor-pointer gap-1 text-lg font-medium text-gray-900 hover:text-[#FF5CBC] transition-colors"
                aria-expanded={openSections}
              >
                সেকশনসমূহ
                <motion.span
                  animate={{ rotate: openSections ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={18} />
                </motion.span>
              </button>

              <AnimatePresence>
                {openSections && (
                  <motion.div
                    ref={sectionModalRef}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-lg shadow-lg border border-[#FF5CBC]/15"
                  >
                    {navdata2.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-gray-900 hover:bg-[#FF5CBC]/10 hover:text-[#FF5CBC]"
                        onClick={() => setOpenSections(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>
        </nav>

        <button
          ref={navButtonRef}
          onClick={() => setOpenNav(!openNav)}
          className="lg:hidden z-50 p-2"
          aria-label="Toggle menu"
        >
          {openNav ? (
            <X className="w-6 h-6 hover:text-[#FF5CBC]" />
          ) : (
            <Menu className="w-6 h-6 hover:text-[#FF5CBC]" />
          )}
        </button>

        <AnimatePresence>
          {openNav && (
            <motion.div
              ref={navRef}
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed inset-0 w-64 h-full p-6 bg-white shadow-lg lg:hidden z-50"
            >
              <Link href="/" className="z-50">
                <Image
                  src="/logo/Memsaheb.png"
                  alt="Memshaheb Bangladesh"
                  width={120}
                  height={60}
                  className="w-20 md:w-28 h-auto"
                  priority
                />
              </Link>
              <ul className="mt-6 space-y-4">
                {navdata3.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="block py-2 text-lg font-medium text-gray-900 hover:text-[#FF5CBC]"
                      onClick={() => setOpenNav(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
