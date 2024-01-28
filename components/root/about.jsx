"use client";

import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import "./about.css";
import { isViewportValid } from "@/utils/media-query";

export default function About() {
  gsap.registerPlugin(ScrollTrigger);
  const isMobile = isViewportValid(768);
  useEffect(() => {
    if (!isMobile) {
      gsap.to(".about-container", {
        scrollTrigger: {
          trigger: ".about-container",
          end: "+=500",
          scrub: 1,
          toggleActions: "restart pause reverse pause",
        },
        backgroundColor: "white",
        duration: 2,
      });
      gsap.fromTo(
        ".card1",
        { x: -500 },
        {
          scrollTrigger: {
            trigger: ".about-container",
            end: "+=500",
            scrub: 1,
            toggleActions: "restart pause reverse pause",
          },
          x: 0,
          duration: 1,
          ease: "none",
        }
      );
      gsap.fromTo(
        ".card3",
        { x: 500 },
        {
          scrollTrigger: {
            trigger: ".about-container",
            end: "+=500",
            scrub: 1,
            toggleActions: "restart pause reverse pause",
          },
          x: 0,
          duration: 1,
          ease: "none",
        }
      );
      gsap.fromTo(
        ".card2",
        { y: 500 },
        {
          scrollTrigger: {
            trigger: ".about-container",
            end: "+=300",
            scrub: 1,
            toggleActions: "restart pause reverse pause",
          },
          y: 0,
          duration: 1,
          ease: "none",
        }
      );
    }
  });
  return (
    <div className="about-container max-md:flex-col">
      <div className="about-template  max-md:pt-40">
        <div className="card1">
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <Image
                  width={400}
                  height={200}
                  src="/assets/card-1.svg"
                  alt="something"
                />
              </div>
            </div>
          </div>
          <div className="slide slide2">
            <div className="content">
              <h3 className="yellow">Choose Your Template!</h3>
              <p>
                Take your pick from our beautiful templates that are designed to
                impress. You can personalize it and give it your own unique
                touch.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-template">
        <div className="card2">
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <Image
                  width={400}
                  height={200}
                  src="/assets/card-2.svg"
                  alt="something"
                />
              </div>
            </div>
          </div>
          <div className="slide slide2">
            <div className="content">
              <h3>Fill in your details</h3>
              <p>
                Fill in your skills, previous experiences and educational
                qualifications.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-template">
        <div className="card3">
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <Image
                  width={400}
                  height={200}
                  src="/assets/card-3.svg"
                  alt="something"
                />
              </div>
            </div>
          </div>
          <div className="slide slide2">
            <div className="content">
              <h3>Download pdf</h3>
              <p>
                Download the remarkable resume you have created and send it to
                your potential employers with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
