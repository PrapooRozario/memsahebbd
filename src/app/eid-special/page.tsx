import React from "react";
import Banner from "./sections/Banner";
import Posts from "./sections/Posts";

export default function EidSpecial() {
  return (
    <div className="mt-10">
      <section className="mb-[107px]">
        <Banner />
      </section>
      <section className="mb-[107px]">
        <Posts />
      </section>
    </div>
  );
}
