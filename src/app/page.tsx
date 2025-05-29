import React from "react";
import Banner from "./home/banner/banner";
import NewPublications from "./home/new-publications/NewPublications";
import EidSpecial from "./home/eid-special/EidSpecial";
export default function page() {
  return (
    <div>
      <section className="mt-10 mb-[107px]">
        <Banner />
      </section>
      <section className="mt-10 mb-[107px]">
        <NewPublications />
      </section>
      <section className="mt-10 mb-[107px]">
        <EidSpecial />
      </section>
    </div>
  );
}
