import HeaderText from "@/app/components/ui/HeaderText";
import PostCard1 from "@/app/components/ui/PostCard1";
import { bannerData } from "@/app/data/BannerData";
import React, { JSX } from "react";

export default function NewPublications(): JSX.Element {
  return (
    <div>
      <HeaderText text="নতুন প্রকাশনা" />
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10">
        {bannerData?.map((d, i) => (
          <PostCard1
            key={i}
            title={d.title}
            link={d.link}
            des={d.des}
            img={d.img}
          ></PostCard1>
        ))}
      </div>
    </div>
  );
}
