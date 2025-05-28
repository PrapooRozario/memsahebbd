import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Button1({
  link,
  text,
}: {
  link: string;
  text: string;
}) {
  return (
    <div>
      <Link href={link}>
        <button className="flex cursor-pointer items-center gap-2 text-white text-lg font-medium bg-[#FF5CBC] hover:bg-[#FF65BF] transition-colors duration-200 py-4 px-8 rounded-[10px] mt-10">
          {text} <ArrowRight size={20} />
        </button>
      </Link>
    </div>
  );
}
