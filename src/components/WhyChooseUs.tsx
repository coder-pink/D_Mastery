"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";
const content = [
    {
      title: "Collaborative Choreography",
      description:
        "Work together in real time with your dance team, instructors, and choreographers. Collaborate on routines, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity in your dance projects.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Collaborative Choreography
        </div>
      ),
    },
    {
      title: "Real-Time Feedback",
      description:
        "See feedback as it happens. With our platform, you can track every modification and suggestion in real time. No more confusion about the latest version of your routine. Say goodbye to the chaos of multiple feedback channels and embrace the simplicity of real-time updates.",
      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/dance-img.webp"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="real-time feedback"
          />
        </div>
      ),
    },
    {
      title: "Routine Version Control",
      description:
        "Experience real-time updates and never stress about routine version control again. Our platform ensures that you're always working on the most recent version of your choreography, eliminating the need for constant manual updates. Stay in sync, keep your team aligned, and maintain the flow of your dance rehearsals without any interruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
          Routine Version Control
        </div>
      ),
    },
    {
      title: "Never Miss a Beat",
      description:
        "Ensure that your dance projects are always up-to-date and synchronized. Our platform guarantees that every dancer and instructor is on the same page, avoiding miscommunications and enhancing overall performance quality. Keep the rhythm going strong without any disruptions.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
          Never Miss a Beat
        </div>
      ),
    },
  ];
  

function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={content} />
    </div>
  )
}

export default WhyChooseUs
