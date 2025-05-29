import Link from "next/link";
import React from "react";

export default function ContactSection() {
  return (
    <div className="rounded-3xl w-full min-h-[500px] p-6 relative bg-[url('/banner/contact-bg.png')] bg-no-repeat bg-cover">
      <div className="text-white flex flex-col justify-center items-center absolute inset-0 text-center px-4">
        <h2 className="sm:text-3xl text-xl md:text-4xl font-bold mb-6">
          প্রদায়ক/কন্ট্রিবিউটর চাই
        </h2>

        <p className="text-lg md:text-xl mb-8 leading-relaxed max-w-3/4">
          আপনি কী শিক্ষার্থী কিংবা গৃহিনী/চাকুরিজীবী, লিখতে চান নিয়মিত আপনার
          মনের কথা, সাহিত্য কিংবা সংবাদ নিয়ে কাজ করতে চান? তাহলে আজই আপনার
          পূর্ণাঙ্গ বায়োডাটা পাঠিয়ে দিন। এছাড়া আপনার ৩টি লেখা নমুনা হিসেবে
          পাঠাতে হবে।
        </p>
        <Link href="/">
          <button
            aria-label="যোগাযোগ করুন"
            className="bg-white hover:bg-[#FF5CBC] hover:text-white text-[#FF5CBC] cursor-pointer font-medium py-3 px-8 rounded-lg text-lg transition-colors duration-300"
          >
            যোগাযোগ করুন
          </button>
        </Link>
      </div>
    </div>
  );
}
