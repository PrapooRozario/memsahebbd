import PostCard from "@/app/components/ui/PostCard";
import { bannerData } from "@/app/data/BannerData";
import React, { JSX } from "react";

export default function Posts(): JSX.Element {
  return (
    <div>
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
    </div>
  );
}
