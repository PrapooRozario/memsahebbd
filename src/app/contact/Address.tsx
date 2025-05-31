import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

export default function Address() {
  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="bg-[#FF5CBC] p-2 sm:p-3 w-fit rounded-xl sm:rounded-2xl">
          <MapPin className="text-white" size={24} />
        </div>
        <p className="font-medium text-base sm:text-lg lg:text-xl text-black">
          বসুন্ধরা, ব্লক এ, ঢাকা- 1229
        </p>
      </div>
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="bg-[#FF5CBC] p-2 sm:p-3 w-fit rounded-xl sm:rounded-2xl">
          <Phone className="text-white" size={24} />
        </div>
        <p className="font-medium text-base sm:text-lg lg:text-xl text-black">
          +৮৮০-১৮৫০৩৫৩০৩১
        </p>
      </div>
      <div className="flex items-center gap-3 sm:gap-4">
        <div className="bg-[#FF5CBC] p-2 sm:p-3 w-fit rounded-xl sm:rounded-2xl">
          <Mail className="text-white" size={24} />
        </div>
        <p className="font-medium text-base sm:text-lg lg:text-xl text-black">
          contact@memsahebbd.com
        </p>
      </div>
    </div>
  );
}
