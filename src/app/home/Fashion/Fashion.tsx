import HeaderText from "@/app/components/ui/HeaderText";
import PostCard from "@/app/components/ui/PostCard";
import { bannerData } from "@/app/data/BannerData";
import React from "react";

export default function Fashion() {
  return (
    <div>
      <HeaderText text="ফ্যাশন" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-10 mt-10">
        {bannerData?.slice(0, 3)?.map((d, i) => (
          <PostCard
            key={i}
            title={d.title}
            link={d.title}
            des={d.des}
            img={d.img}
          ></PostCard>
        ))}
      </div>
    </div>
  );
}
