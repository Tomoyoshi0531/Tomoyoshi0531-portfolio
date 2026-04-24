"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export default function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className="rounded-2xl border border-[#ffffff]/25 bg-[#1a365d]/70">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="font-semibold text-[#ffffff]">{item.question}</span>
              <span className="text-[#d4a94a]">{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="px-5 pb-5 text-sm leading-7 text-[#ffffff]/90">{item.answer}</p>}
          </div>
        );
      })}
    </div>
  );
}
