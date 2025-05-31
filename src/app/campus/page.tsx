import React from "react";
import HeaderText from "../components/ui/HeaderText";
import { bannerData } from "../data/BannerData";
import PostCard from "../components/ui/PostCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Campus() {
  return (
    <div className="mb-[107px] mt-25">
      <HeaderText text="অন্দরমহল" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
        {bannerData?.map((d, i) => (
          <PostCard
            key={i}
            title={d.title}
            link={d.link}
            des={d.des}
            img={d.img}
          ></PostCard>
        ))}
      </div>
      <div
        className={`flex flex-wrap items-center gap-5 ${inter.className} mt-[60px] justify-center`}
      >
        <button className="bg-[#FF5CBC] rounded-lg py-3 px-6 text-white">
          <ArrowLeft />
        </button>
        <button className="bg-[#FF5CBC] rounded-lg py-3 px-5 text-white">
          <p>1</p>
        </button>
        <button className="bg-[#FF5CBC]/70 rounded-lg py-3 px-5 text-white">
          <p>2</p>
        </button>
        <button className="bg-[#FF5CBC]/70 rounded-lg py-3 px-5 text-white">
          <p>...</p>
        </button>
        <button className="bg-[#FF5CBC]/70 rounded-lg py-3 px-5 text-white">
          <p>12</p>
        </button>
        <button className="bg-[#FF5CBC] rounded-lg py-3 px-6 text-white">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
