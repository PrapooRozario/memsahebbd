import HeaderText from "@/app/components/ui/HeaderText";
import PostCard from "@/app/components/ui/PostCard";
import { bannerData } from "@/app/data/BannerData";
import React from "react";

export default function Literature() {
  return (
    <div>
      <HeaderText text="সাহিত্য" />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
        {bannerData?.slice(0, 4)?.map((d, i) => (
          <PostCard
            key={i}
            title={d.title}
            link={d.link}
            des={d.des}
            img={d.img}
          ></PostCard>
        ))}
      </div>
    </div>
  );
}
