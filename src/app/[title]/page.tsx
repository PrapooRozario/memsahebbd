import React from "react";
import { bannerData } from "../data/BannerData";
import Image from "next/image";
import { CalendarRangeIcon, CloudAlert, TimerIcon } from "lucide-react";

export default function Post({ params }: { params: { title: string } }) {
  const decodeURL = decodeURIComponent(params.title);
  const post = bannerData.find((p) => p.title === decodeURL);

  if (!post) {
    return (
      <div className="mt-10 text-center p-4">
        <div className="mb-4 flex justify-center"><CloudAlert size={60} color="red"/></div>
        <p className="text-lg text-gray-800">
          দুঃখিত, আপনি যে পোস্টটি খুঁজছেন তা পাওয়া যায়নি। অনুগ্রহ করে আবার
          চেষ্টা করুন।
        </p>
        <p className="text-sm text-gray-600 mt-2">
          Error: পোস্টটি ডাটাবেসে নেই (404 Not Found)
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 md:mt-10 mb-10 md:mb-[107px]">
      <div className="relative aspect-video rounded-[20px] overflow-hidden">
        <Image
          alt={post.title}
          src={post.img}
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="mt-6 md:mt-10 text-3xl sm:text-4xl md:text-5xl font-semibold">
        {post.title}
      </h1>

      <div className="space-y-4 sm:space-y-6 mt-6 md:mt-10">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="bg-[#FF5CBC] p-2 sm:p-3 w-fit rounded-xl sm:rounded-2xl">
            <CalendarRangeIcon className="text-white" size={20} />
          </div>
          <p className="font-medium text-sm sm:text-base lg:text-lg text-black">
            {post.date}
          </p>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="bg-[#FF5CBC] p-2 sm:p-3 w-fit rounded-xl sm:rounded-2xl">
            <TimerIcon className="text-white" size={20} />
          </div>
          <p className="font-medium text-sm sm:text-base lg:text-lg text-black">
            {post.readTime}
          </p>
        </div>
      </div>

      <div className="mt-10 md:mt-20">
        <p className="text-base sm:text-lg md:text-xl leading-relaxed sm:leading-loose">
          ঘুমের মধ্যেই মাঝে মাঝে কেঁপে উঠছেন হামিদা বেগম। চোখ, কপাল কেমন কুঁচকে
          ফেলছেন আবার স্বাভাবিক হচ্ছেন। হয়তো দুঃস্বপ্ন দেখছেন। কেমন ঘোরের মধ্যেই
          নাকে পায়েসের ঘ্রাণ আসে তার। পাতলা ঘুমটা ভেঙ্গে যায়। চোখ রগড়ে দুর্বল
          শরীর নিয়ে বেশ কসরত করে উঠে বসেন  বিছানায়। নাক কুঁচকে বাতাসে কিসের যেন
          ঘ্রাণ খোঁজেন। হ্যাঁ! পায়েসই তো। আজ কি তাহলে ঈদ? বাংলাদেশের কোনো এক
          প্রান্তে নদীর বুকে জেগে ওঠা চর এলাকায় হামিদার জন্ম হয়েছিল। অভাব, অনটন
          আর চরের রুক্ষ পরিবেশে তার বেড়ে ওঠা।  পেটপুর্তি আর প্রতিকূলতার সাথে
          লড়াই ছাড়া অন্য কোনো কিছু ছিল না তার জীবনে। এই লড়াকু, রংহীন জীবনের
          একমাত্র আনন্দ ছিল ইদের দিনের ভোরে মায়ের রান্না করা রসের পায়েস। কি তার
          ঘ্রাণ! সারাবছর সে এটার জন্য অপেক্ষা করতো। অভাবী মা- বাপের সামর্থ্য ছিল
          না সারাবছর আরেকবার রস, পোলাওয়ের চালের জোগান করে।রঙহীন সেই জীবন হুট
          করেই যেন এক চিত্রকরের তুলির ছোঁয়ায় রঙিন হয়ে উঠলো। গোবিন্দপুরের জমিদার
          বংশের শেষ জমিদার একবার ঘুরতে এসে হামিদাকে দেখে একরকম বগলদাবা করেই নিয়ে
          গেলেন তার শহুরে, শিক্ষিত, কেতাদুরস্ত পুত্রের বধূ করে। কেমন সব পালটে
          গেল। শহরের চোখ ধাঁধানো  রূপে আর আদবকেতায় ধাতস্থ হতে বেশ সময় লাগে তার
          তবে আধুনিকতার স্রোতে গা ভাসাননি। ঘরের লক্ষ্মীমন্ত বউ হয়েই সামলেছেন
          রসুইঘর থেকে শুরু করে স্বামী আর তিন ছেলের জীবনের রণক্ষেত্র। তার ছিল
          রান্নার বাতিক। মা, দাদির কাছে থেকে জানা তো আছেই, শহুরে অনেক রান্নার
          সাথে সাথে শেখার চেষ্টা করেছেন বিদেশি অনেক রান্নাও। তবে পায়েস তার খুব
          পছন্দের খাবার।  কিসমিস দিয়ে ঘন দুধের পায়েসের উপর কাজু- পেস্তার কুচি
          ছড়ানো এই খাবারটা বেশ ভালোই রপ্ত করেছেন তিনি  বিয়ের পর। শুধু যে রাঁধতে
          ভালোবাসতেন তাই নয়, খাওয়াতেও খুব ভালোবাসতেন। ঈদের দিন বড় বড় ডেকচিতে নিজ
          হাতে রেঁধে পাঠিয়ে দিতেন শহরের অনেক বস্তিতে। আর বাড়িতে আসা
          আত্মীয়-স্বজন,  বন্ধুবান্ধব তো আছেই! আরেকবার নাক কুঁচকে বাতাসে ঘ্রাণ
          নেন তিনি। এখানে এটাই তার প্র‍থম ঈদ। বালিশের পাশে রাখা মোটা ফ্রেমের
          চশমাটা হাতড়ে নিয়ে চোখে গলিয়ে বিছানা থেকে নামার চেষ্টা করেন। ওল্ড হোমের
          মায়া নামের মেয়েটি এসে মুচকি হেসে সাহায্যের হাত বাড়িয়ে দেয়, ঈদ মোবারক,
          দাদি। চমকে তার দিকে তাকান হামিদা বেগম। তার নিজের নাতী-নাতনীরা এরকম করে
          তো বলেনি কখনও! অবশ্য সে সময়টুকুই বা পেতো নাকি তারা।হোমের সব বৃদ্ধারা
          নতুন জামা, শাড়ি পরে ডাইনিং রুমে এসে বসেছে। না, সবাই সন্তানদের পাঠানো
          নতুন জামা পরেনি; সে সৌভাগ্য সবার হয়নি। এসব এই ওল্ড হোমের মালিকেরই কাজ।
          সবাই লম্বা ডাইনিং টেবিলে সারি করে রাখা চেয়ারে বসেছে। সামনে রাখা প্লেট,
          মায়া পায়েস বেড়ে দিচ্ছে এক এক করে।
        </p>
      </div>
    </div>
  );
}
