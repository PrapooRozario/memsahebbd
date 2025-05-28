"use client";
import { navdata1 } from "@/app/data/NavData1";
import { navdata2 } from "@/app/data/NavData2";
import { navdata3 } from "@/app/data/NavData3";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, useScroll } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { JSX, useEffect, useRef, useState } from "react";
import { useClickAway } from "react-use";
export default function Navbar(): JSX.Element {
  const [openSections, setOpenSections] = useState<boolean>(false);
  const [openNav, setOpenNav] = useState<boolean>(false);
  const sectionModal = useRef<HTMLDivElement | null>(null);
  const sectionModalButton = useRef<HTMLButtonElement | null>(null);
  const nav = useRef<HTMLDivElement | null>(null);
  const navButton = useRef<HTMLButtonElement | null>(null);
  useClickAway(sectionModal, (e) => {
    if (
      sectionModalButton.current &&
      sectionModalButton.current.contains(e.target as Node)
    ) {
      return;
    }
    setOpenSections(false);
  });
  useClickAway(nav, (e) => {
    if (navButton.current && navButton.current.contains(e.target as Node)) {
      return;
    }
    setOpenNav(false);
  });
  const { scrollY } = useScroll(); // Detect scroll position
  const [scrollDown, setScrollingDown] = useState<boolean>(false);

  useEffect(() => {
    return scrollY.onChange((y) => setScrollingDown(y > 20));
  }, [scrollY]);

  return (
    <div
      className={`mt-4 flex items-center sticky top-4 z-50 ${
        scrollDown
          ? "bg-white"
          : "bg-[linear-gradient(90deg,rgba(217,207,254,0.30)_0%,rgba(217,207,254,0.30)_100%)] "
      } justify-between px-8 rounded-2xl`}
    >
      <div>
        <Image
          alt="Memshaheb Bangladesh"
          src="/logo/Memsaheb.png"
          width={100}
          height={100}
          className="w-full h-auto max-w-[80px] md:max-w-[100px] object-contain"
          priority
        />
      </div>

      <nav className="relative">
        <ul className="lg:flex gap-12 items-center  backdrop-blur-sm hidden">
          {navdata1.map((nav) => (
            <li key={nav?.href}>
              <Link
                href={nav?.href}
                className="text-lg font-medium text-gray-800 hover:text-[#FF5CBC] transition-colors duration-300"
              >
                {nav?.name}
              </Link>
            </li>
          ))}

          <li className="relative">
            <button
              ref={sectionModalButton}
              onClick={() => setOpenSections(!openSections)}
              className="text-lg cursor-pointer font-medium text-gray-800 hover:text-[#FF5CBC] transition-colors duration-300 flex items-center gap-2"
              aria-expanded={openSections}
              aria-haspopup="true"
            >
              সেকশনসমূহ
              <motion.div
                animate={{ rotate: openSections ? 180 : 0 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
              >
                <ChevronDown size={18} />
              </motion.div>
            </button>

            <motion.div
              ref={sectionModal}
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{
                opacity: openSections ? 1 : 0,
                y: openSections ? 0 : -10,
                scale: openSections ? 1 : 0.95,
                pointerEvents: openSections ? "auto" : "none",
              }}
              transition={{
                duration: 0.2,
                ease: "easeOut",
              }}
              className="absolute z-50 right-0 w-[180px] top-full mt-2 py-6 px-8 rounded-lg border border-[#FF5CBC]/15 bg-white/95 backdrop-blur-sm"
            >
              <ul className="flex flex-col gap-5">
                {navdata2.map((nav) => (
                  <li key={nav?.href}>
                    <Link
                      href={nav?.href}
                      className="block text-lg font-medium text-gray-800 hover:text-[#FF5CBC] transition-colors duration-300"
                      onClick={() => setOpenSections(false)}
                    >
                      {nav?.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </li>
        </ul>
        <button
          ref={navButton}
          onClick={() => setOpenNav(!openNav)}
          className="cursor-pointer z-50 lg:hidden"
        >
          {openNav ? (
            <X
              size={24}
              className="hover:text-[#FF5CBC] transition-colors duration-300"
            />
          ) : (
            <Menu
              size={24}
              className="hover:text-[#FF5CBC] transition-colors duration-300"
            />
          )}
        </button>

        <motion.div
          ref={nav}
          initial={{ x: "-100%" }}
          animate={{ x: openNav ? 0 : "-100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed top-0 left-0 w-60 h-full p-6 border-r border-[#FF5CBC]/15 bg-white/95 backdrop-blur-sm z-50"
        >
          <ul className="flex flex-col gap-6">
            {navdata3.map((nav) => (
              <li key={nav?.href}>
                <Link
                  href={nav?.href}
                  className="block text-lg font-medium text-gray-800 hover:text-[#FF5CBC] transition-colors duration-300"
                  onClick={() => setOpenSections(false)}
                >
                  {nav?.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
      </nav>
    </div>
  );
}
