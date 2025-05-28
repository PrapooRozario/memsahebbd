import Button1 from "@/app/components/ui/Button1";
import React, { JSX } from "react";

type BannerData = {
  img: string;
  title: string;
  des: string;
  link: string;
};

export default function BannerCard({
  img,
  title,
  des,
  link,
}: BannerData): JSX.Element {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-[636px] rounded-[30px] relative  overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/40 rounded-[30px]" />

      <div className="relative h-full flex flex-col justify-center px-12 py-16">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            {title}
          </h1>
          <p className="text-lg md:text-xl font-medium text-white/90 leading-relaxed max-w-lg">
            {des}
          </p>
          <Button1 link={link} text="আরো পড়ুন" />
        </div>
      </div>
    </div>
  );
}
