import HeaderText from "@/app/components/ui/HeaderText";
import PostCard from "@/app/components/ui/PostCard";
import { bannerData } from "@/app/data/BannerData";
import React from "react";

export default function EidSpecial() {
  return (
    <div>
      <HeaderText text="ঈদ স্পেশাল" />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {bannerData?.slice(0, 3)?.map((d, i) => (
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
