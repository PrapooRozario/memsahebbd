import Image from "next/image";
import Link from "next/link";
import React, { JSX } from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer(): JSX.Element {
  return (
    <footer className="bg-[#171717] w-full">
      <div className=" mx-auto max-w-4/5 p-4">
        <div className="flex flex-col">
          <div>
            <Link href="/">
              <Image
                alt="Memshaheb Bangladesh"
                src="/logo/Memsaheb2nd.png"
                width={100}
                height={100}
                className="w-auto h-auto max-w-[80px] md:max-w-[100px] object-contain"
                priority
              />
            </Link>
          </div>

          <div className="my-6 md:flex justify-between space-y-6">
            <ul className="grid md:grid-cols-2 w-1/2 gap-4 md:gap-8">
              <li>
                <Link
                  className="text-base md:text-lg text-white hover:text-[#FF5CBC] transition-colors"
                  href="/আমাদের সম্পর্কে"
                >
                  আমাদের সম্পর্কে
                </Link>
              </li>
              <li>
                <Link
                  className="text-base md:text-lg text-white hover:text-[#FF5CBC] transition-colors"
                  href="/শর্তাবলী"
                >
                  শর্তাবলী
                </Link>
              </li>
              <li>
                <Link
                  className="text-base md:text-lg text-white hover:text-[#FF5CBC] transition-colors"
                  href="/যোগাযোগ"
                >
                  যোগাযোগ
                </Link>
              </li>
              <li>
                <Link
                  className="text-white hover:text-[#FF5CBC] transition-colors"
                  href="/কপিরাইটস"
                >
                  কপিরাইটস
                </Link>
              </li>
            </ul>
            <div className="flex gap-10">
              <Link href={"https://www.facebook.com/Memsahebbd2024"}>
                <FaFacebook className="text-white text-2xl hover:text-[#FF5CBC] transition-colors" />
              </Link>
              <Link href={"#"}>
                <FaXTwitter className="text-white text-2xl hover:text-[#FF5CBC] transition-colors" />
              </Link>
              <Link href={"#"}>
                <FaLinkedin className="text-white text-2xl hover:text-[#FF5CBC] transition-colors" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#202020] py-4">
        <p className="text-white text-sm md:text-base text-center">
          কপিরাইট © {new Date().getFullYear()} মেমসাহেব ম্যাগাজিন
        </p>
      </div>
    </footer>
  );
}
