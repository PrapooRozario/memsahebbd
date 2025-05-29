import React from "react";

export default function HeaderText({ text }: { text: string }) {
  return (
    <div>
      <h1 className="text-[50px] font-semibold">{text}</h1>
    </div>
  );
}
