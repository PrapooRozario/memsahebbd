import { Send } from "lucide-react";
import React from "react";

export default function ContactForm() {
  return (
    <form className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-black text-base sm:text-lg lg:text-xl mb-2"
        >
          আপনার নাম
        </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="আপনার নাম লিখুন"
          required
          className="w-full bg-[#D9CFFE66] placeholder-[#00000080] px-3 sm:px-4 py-3 sm:py-4 rounded-[10px] focus:outline-none focus:ring-0 focus:border-[#FF5CBC] text-sm sm:text-base"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-black text-base sm:text-lg lg:text-xl mb-2"
        >
          আপনার ইমেইল
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="আপনার ইমেইল ঠিকানা লিখুন"
          required
          className="w-full bg-[#D9CFFE66] placeholder-[#00000080] px-3 sm:px-4 py-3 sm:py-4 rounded-[10px] focus:outline-none focus:ring-0 focus:border-[#FF5CBC] text-sm sm:text-base"
        />
      </div>
      <div>
        <label
          htmlFor="subject"
          className="block text-black text-base sm:text-lg lg:text-xl mb-2"
        >
          বিষয়
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="বার্তার বিষয় লিখুন"
          required
          className="w-full bg-[#D9CFFE66] placeholder-[#00000080] px-3 sm:px-4 py-3 sm:py-4 rounded-[10px] focus:outline-none focus:ring-0 focus:border-[#FF5CBC] text-sm sm:text-base"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-black text-base sm:text-lg lg:text-xl mb-2"
        >
          আপনার মেসেজ
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="আপনার বার্তা এখানে লিখুন"
          rows={6}
          required
          className="w-full bg-[#D9CFFE66] placeholder-[#00000080] px-3 sm:px-4 py-3 sm:py-4 rounded-[10px] focus:outline-none focus:ring-0 focus:border-[#FF5CBC] text-sm sm:text-base"
        />
      </div>
      <button
        type="submit"
        className="flex w-full sm:w-auto justify-center items-center gap-2 sm:gap-3 text-white text-base sm:text-lg lg:text-xl font-medium bg-[#FF5CBC] hover:bg-[#FF65BF] transition-colors duration-200 py-3 sm:py-4 px-6 sm:px-8 rounded-[10px] mt-6"
      >
        প্রেরণ করুন
        <Send size={18}/>
      </button>
    </form>
  );
}
