"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "WHY SCOUTIV8?",
    answer:
      "Scoutiv8 was founded by people with over 30 years experience in the development of young footballers, having been involved in coaching and scouting at grassroots and Academy level. We provide additional individual support to male and female players, to help them become the best version of themselves on and off the field.",
  },
  {
    question: "WHAT ISSUES DO GRASSROOTS PLAYERS CURRENTLY FACE?",
    answer:
      "No Individual Development Plan to provide focused development areas and limited access to specialist coaches required to enhance all aspects of the player's individual development.",
  },
  {
    question: "HOW DOES IT WORK?",
    answer:
      "A fully qualified and experienced professional scout can be booked to attend a game and observe the player. A detailed player scouting assessment report will then be compiled highlighting current attributes and areas for development across Technical, Tactical, Physical and Psychological aspects.",
  },
  {
    question:
      "IS DATA DRIVEN TECHNOLOGY USED TO SUPPORT THE SCOUT'S ASSESSMENT?",
    answer:
      "Players aged 12+ can book a Premium Scouting Assessment package which includes GPS tracking data through our partnership with PlayerData. A supplementary report assessed by our Sports Science department will explain Physical and Tactical data from the observed game.",
  },
  {
    question:
      "DOES THE SCOUTING REPORT INCLUDE RECOMMENDATIONS FOR FUTURE DEVELOPMENT?",
    answer:
      "Yes. The Individual Development Plan (IDP) is included within the scouting assessment report, based on the player's current attributes and development areas.",
  },
  {
    question: "WHAT HAPPENS AFTER I RECEIVE MY REPORT?",
    answer:
      "A video consultation can be arranged to discuss training package options aligned with the player's Individual Development Plan and short, medium and long-term goals.",
  },
  {
    question: "WILL SCOUTIV8 SUPPORT MY LONG-TERM DEVELOPMENT?",
    answer:
      "Absolutely. Scoutiv8 provides holistic long-term support covering all four corners of development — Technical, Tactical, Physical and Psychological.",
  },
  {
    question: "DO AGE RESTRICTIONS APPLY?",
    answer:
      "Services are available from age 8 with no upper age cap. Premium GPS packages are available from age 12+. Academy-level scouting reports are available for ages 8–11.",
  },
  {
    question:
      "WILL SCOUTIV8 GUARANTEE A TRIAL WITH A PROFESSIONAL ACADEMY?",
    answer:
      "No. Scoutiv8 has no formal affiliation with any professional club. Our aim is to enhance player development and confidence within their existing football journey.",
  },
];

export default function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">FAQs</h2>
        </div>

        <div className="border-t border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <div key={index} className="border-b border-white/10">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-start py-6 text-left group"
                >
                  <span className="font-semibold uppercase tracking-wide pr-6 group-hover:text-[#daba0b] transition">
                    {faq.question}
                  </span>

                  {/* Fixed Icon Container */}
                  <div className="shrink-0 ml-4 mt-1">
                    <Plus
                      size={20}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-45 text-[#daba0b]" : ""
                      }`}
                    />
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-300 leading-relaxed pr-8 pb-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}