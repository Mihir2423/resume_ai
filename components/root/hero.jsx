"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./hero.css";

const Hero = () => {
  return (
    <section className="flex p-4 max-md:pt-24 max-md:justify-center md:p-10 min-h-screen flex-col md:flex-row">
      <div className="flex flex-col justify-center md:p-10 w-full max-container md:mt-10 md:ml-auto">
        <p className="text-sm md:text-xl rounded-full bg-blue-100 w-fit py-2 px-4 font-poppins text-blue-500 md:text-center">
          <span className="text-coral-red">$ </span>Discover the easiest way to
          build your CV
        </p>
        <h1 className="font-bold text-4xl max-md:w-[90%] mt-4 md:mt-7 text-blue-900">
          <span>Online CV Builder With</span>
          <br />
          <span>Creative Templates.</span>
        </h1>
        <p className="w-full md:w-[500px] text-sm md:text-xl mt-2 md:mt-5 text-gray-500 gap-4">
          Our Perfect resume builder takes the hassle out of resume writing.
          Choose from several templates and follow easy prompts to create the
          perfect job-ready resume.
        </p>
        <div className="flex items-center gap-6">
          <div className="flex md:flex-row gap-3 md:space-y-0 md:space-x-4 mt-4 md:mt-6 text-sm text-white">
            <Link href="/form" className="create-btn">
              GENERATE
            </Link>
          </div>
          <div className="flex md:flex-row gap-3 md:space-y-0 md:space-x-4 mt-4 md:mt-6 text-sm text-white">
            <Link href="/ai" className="create-btn">
              AI GENERATE
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 md:mt-32 md:ml-24 md:p-20 max-md:shadow-2xl max-md:shadow-blue-500">
        <Image
          src="/assets/banner.png"
          alt="home-banner"
          width={500}
          height={500}
          className="w-full md:w-[1100px] h-[350px] object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
