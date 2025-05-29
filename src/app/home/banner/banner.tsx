"use client";

import React, { JSX, useRef, useState, useEffect } from "react";
import type { Swiper as SwiperType } from "swiper";
import BannerCard from "./bannerCard";
import "swiper/css";
import { bannerData } from "@/app/data/BannerData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../banner/banner.css";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Banner(): JSX.Element {
  const nextEl = useRef<HTMLButtonElement | null>(null);
  const prevEl = useRef<HTMLButtonElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [swiperRef, setSwiperRef] = useState<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef && nextEl.current && prevEl.current) {
      if (
        swiperRef.params.navigation &&
        typeof swiperRef.params.navigation !== "boolean"
      ) {
        swiperRef.params.navigation.prevEl = prevEl.current;
        swiperRef.params.navigation.nextEl = nextEl.current;
      }
      swiperRef.navigation.init();
      swiperRef.navigation.update();
    }
  }, [swiperRef]);

  const nextBanners = [
    ...bannerData.slice(currentIndex + 1),
    ...bannerData.slice(0, currentIndex),
  ].reverse();

  return (
    <div className="relative">
      <div className="absolute md:flex flex-col hidden gap-6 right-12 bottom-10 z-20">
        <div className="relative h-[72px] mb-3">
          {nextBanners.map((d, index) => (
            <Image
              alt={d.title}
              src={d.img}
              key={index}
              width={105}
              height={72}
              className="rounded-2xl absolute h-[72px] object-cover"
              style={{ left: `${index * 8}px` }}
            />
          ))}
        </div>
        <div className="flex gap-3">
          <button
            ref={prevEl}
            className="text-white p-4 rounded-full bg-[#FF5CBC]/80 hover:bg-[#FF5CBC] transition-colors cursor-pointer"
          >
            <ChevronLeft size={35} />
          </button>
          <button
            ref={nextEl}
            className="text-white p-4 rounded-full bg-[#FF5CBC]/80 hover:bg-[#FF5CBC] transition-colors cursor-pointer"
          >
            <ChevronRight size={35} />
          </button>
        </div>
      </div>

      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        effect="fade"
        autoplay={{ delay: 10000 }}
        loop={true}
        onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}
        pagination={{ clickable: true }}
        onSwiper={setSwiperRef}
      >
        {bannerData.map((data, i) => (
          <SwiperSlide key={i}>
            <BannerCard
              img={data.img}
              title={data.title}
              des={data.des}
              link={data.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
