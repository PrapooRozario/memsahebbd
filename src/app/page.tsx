import React from "react";
import Banner from "./home/banner/banner";
import NewPublications from "./home/new-publications/NewPublications";
import EidSpecial from "./home/eid-special/EidSpecial";
import LatestNews from "./home/latest-news/LatestNews";
import Literature from "./home/literature/Literature";
import ContactSection from "./home/contact/ContactSection";
import WomenDevelopment from "./home/women-development/WomenDevelopment";
import Fashion from "./home/Fashion/Fashion";
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
      <section className="mb-[107px]">
        <Literature />
      </section>
      <section className="mb-[107px]">
        <WomenDevelopment />
      </section>
      <section className="mb-[107px]">
        <Fashion />
      </section>
    </div>
  );
}
