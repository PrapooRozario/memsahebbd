import React from "react";
import Banner from "./home/banner/banner";
import NewPublications from "./home/new-publications/NewPublications";
import EidSpecial from "./home/eid-special/EidSpecial";
import LatestNews from "./home/latest-news/LatestNews";
import { ContactSection } from "./home/contact/ContactSection";
export default function page() {
  return (
    <div>
      <section className="mt-10 mb-[107px]">
        <Banner />
      </section>
      <section className="mb-[107px]">
        <NewPublications />
      </section>
      <section className="mb-[107px]">
        <EidSpecial />
      </section>
      <section className="mb-[107px]">
        <LatestNews />
      </section>
      <section className="mb-[107px]">
          <ContactSection />
      </section>
    </div>
  );
}
