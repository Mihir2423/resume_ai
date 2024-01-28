"use client";

import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { isViewportValid } from "@/utils/media-query";

const Intro = () => {
  gsap.registerPlugin(ScrollTrigger);
  const isMobile = isViewportValid(768);

  useEffect(() => {
    if (!isMobile) {
      gsap.to(".intro_section", {
        scrollTrigger: {
          trigger: ".about-template",
          end: "+=900",
          scrub: 1,
          toggleActions: "restart pause reverse pause",
        },
        filter: "blur(20px)",
        duration: 2,
      });
    }
  });
  return (
    <div className="intro_section relative max-md:h-screen w-full">
      <div className="flex p-4 flex-col gap-4 items-center md:flex-row bg-gradient-to-b md:bg-gradient-to-r from-white to-blue-400 min-h-screen w-full item-center">
        <div className="flex flex-col w-full max-md:px-4 md:w-1/2 ">
          <div className="flex space-x-3">
            <span className="bg-blue-500 rounded-full w-4 h-4"></span>
            <span className="bg-violet-500 rounded-full w-4 h-4"></span>
            <span className="bg-yellow-500 rounded-full w-4 h-4"></span>
            <span className="bg-red-500 rounded-full w-4 h-4"></span>
            <span className="bg-green-500 rounded-full w-4 h-4"></span>
            <span className="bg-orange-500 rounded-full w-4 h-4"></span>
          </div>
          <span className="text-4xl mt-8 font-bold">
            Why Choose Our Platform?
          </span>
          <p className="mt-2 text-xl text-gray-600 font-palanquin">
            Thumbs-up for our Easy Online Resume Builder! Craft a professional
            resume effortlessly with our user-friendly interface. Our
            step-by-step expert tips guide you through the process, ensuring a
            standout application.
          </p>
          <p className="mt-2 text-xl text-gray-600 font-palanquin">
            Become a tour guide in your career journey with confidence. Our
            platform offers recruiter-approved phrases to enhance your resume,
            giving you an edge in the hiring process. Choose us for a seamless
            experience in showcasing your skills and landing that dream job.
          </p>
        </div>
        <div className="flex flex-col gap-4 max-md:mt-4 items-center max-md:px-4 w-full md:w-1/2 ">
          <div className="flex text-black border shadow-sm rounded-md border-r-slate-700 bg-white p-4 items-center w-full">
            <Image
              src="/assets/thumbs-up.png"
              alt="thumbs-up"
              width={60}
              height={60}
              className="w-[60px] h-[60px] p-2"
            />
            <div className="flex flex-col ml-3">
              <span className="font-bold text-xl">
                Easy Online Resume Builder
              </span>
              <span className="mt-2 w-auto">
                Streamline your resume creation with our simple and efficient
                online tool.
              </span>
            </div>
          </div>
          <div className="flex text-black border shadow-sm rounded-md border-r-slate-700 bg-white p-4 items-center w-full">
            <Image
              src="/assets/tour-guide.png"
              alt="tour-guide"
              width={60}
              height={60}
              className="w-[60px] h-[60px] p-2"
            />
            <div className="flex flex-col ml-3">
              <span className="font-bold text-xl">
                Step By Step Expert Tips
              </span>
              <span className="mt-2 w-auto">
                Navigate your career path with ease using our expert tips for a
                polished and impactful resume.
              </span>
            </div>
          </div>
          <div className="flex text-black max-md:mb-[100px] border shadow-sm rounded-md border-r-slate-700 bg-white p-4 items-center w-full">
            <Image
              src="/assets/hiring.png"
              alt="hiring"
              width={60}
              height={60}
              className="w-[60px] h-[60px] p-2"
            />
            <div className="flex flex-col ml-3">
              <span className="font-bold text-xl">
                Recruiter Approved Phrases
              </span>
              <span className="mt-2 w-auto">
                {
                  "Stand out in the hiring process with our platform's use of recruiter-approved phrases that speak volumes to potential employers."
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
