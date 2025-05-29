import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PostCard {
  img: string;
  title: string;
  des: string;
  link: string;
}

const PostCard1: React.FC<PostCard> = ({ img, title, des, link }) => {
  return (
    <div className="bg-[#D9CFFE4D] rounded-[10px] flex flex-col min-h-[520px]">
      <div className="relative h-[300px] w-full">
        <Image
          alt="Card Image"
          src={img}
          fill
          className="rounded-t-[10px] object-cover"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <p className="text-lg mt-5 line-clamp-4">{des}</p>
        <Link
          href={link}
          className="block text-center  border border-[#FF5CBC] rounded-[10px] py-3 px-8 w-full text-[#FF5CBC] text-lg mt-10 cursor-pointer hover:bg-[#FF5CBC] hover:text-white transition-all duration-200"
        >
          বিস্তারিত পড়ুন
        </Link>
      </div>
    </div>
  );
};

export default PostCard1;
