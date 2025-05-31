import React from "react";
import HeaderText from "../components/ui/HeaderText";
import ContactForm from "./ContactForm";
import Address from "./Address";

export default function Contact() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-20 mt-10 sm:mt-16 lg:mt-20 mb-12 sm:mb-16 lg:mb-24 px-4 sm:px-6 lg:px-8">
    <div className="flex-1">
      <HeaderText text="যোগাযোগ করুন" />
      <div className="mt-6 sm:mt-8 lg:mt-12">
        <ContactForm />
      </div>
    </div>
    <div className="flex-1">
      <HeaderText text="আমাদের ঠিকানা" />
      <div className="mt-6 sm:mt-8 lg:mt-12">
        <Address />
      </div>
    </div>
  </div>
  );
}
