import React from "react";
import HeaderText from "../components/ui/HeaderText";
import PostCard from "../components/ui/PostCard";
import { bannerData } from "../data/BannerData";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
export default function Literature() {
  return (
    <div className="mb-[107px] mt-25">
      <HeaderText text="সাহিত্য" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
        {bannerData?.map((d, i) => (
          <PostCard
            key={i}
            title={d.title}
            link={d.title}
            des={d.des}
            img={d.img}
          ></PostCard>
        ))}
      </div>
      <div className={`flex flex-wrap items-center gap-5 ${inter.className} mt-[60px] justify-center`}>
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
