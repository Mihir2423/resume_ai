"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Image from "next/image";
import React from "react";
import "./template.css";
import { Map } from "lucide-react";
import { Smartphone } from "lucide-react";
import { Mail } from "lucide-react";
import { FileVideo2 } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Linkedin } from "lucide-react";
import { ArrowDownToLine } from "lucide-react";
import { Home } from "lucide-react";
import { useRouter } from "next/navigation";

const Template = () => {
  const router = useRouter();
  const printDocument = () => {
    const input = document.getElementById("resume");
    html2canvas(input).then((canvas) => {
      let imgWidth = 208;
      let extraHeight = -25;
      let imgHeight = (canvas.height * imgWidth) / canvas.width + extraHeight;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("download.pdf");
    });
  };
  return (
    <>
      <div className="resume" id="resume">
        <div className="resume_left">
          <div className="resume_profile">
            <Image
              width={400}
              height={400}
              className="w-full h-full"
              src="/assets/bg-auth-dark.jpg"
              alt="profile_pic"
            />
          </div>
          <div className="resume_content">
            <div className="resume_item resume_info">
              <div className="title">
                <p className="bold">Mihir Aman Raj</p>
                <p className="regular">
                  Role, Age <br /> Gender
                </p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <Map />
                  </div>
                  <div className="data">Address</div>
                </li>
                <li>
                  <div className="icon">
                    <Smartphone />
                  </div>
                  <div className="data">PhoneNum</div>
                </li>
                <li>
                  <div className="icon">
                    <Mail />
                  </div>
                  <div className="data">Email</div>
                </li>
                <li>
                  <div className="icon">
                    <FileVideo2 />
                  </div>
                  <div className="data">Skype</div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_skills">
              <div className="title">
                <p className="bold">{"skill's"}</p>
              </div>
              <ul>
                <li>
                  <div className="skill_name">HTML</div>
                  <div className="skill_progress">
                    <span style={{ width: "80%" }} />
                  </div>
                  <div className="skill_per">80%</div>
                </li>
                <li>
                  <div className="skill_name">CSS</div>
                  <div className="skill_progress">
                    <span style={{ width: "70%" }} />
                  </div>
                  <div className="skill_per">70%</div>
                </li>
                <li>
                  <div className="skill_name">SASS</div>
                  <div className="skill_progress">
                    <span style={{ width: "90%" }} />
                  </div>
                  <div className="skill_per">90%</div>
                </li>
                <li>
                  <div className="skill_name">JS</div>
                  <div className="skill_progress">
                    <span style={{ width: "60%" }} />
                  </div>
                  <div className="skill_per">60%</div>
                </li>
                <li>
                  <div className="skill_name">JQUERY</div>
                  <div className="skill_progress">
                    <span style={{ width: "88%" }} />
                  </div>
                  <div className="skill_per">88%</div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_social">
              <div className="title">
                <p className="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <Facebook />
                  </div>
                  <div className="data">
                    <p className="semi-bold">Facebook</p>
                    <p>mihir@facebook</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <Twitter />
                  </div>
                  <div className="data">
                    <p className="semi-bold">Twitter</p>
                    <p>mihir@twitter</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <i className="fab fa-youtube" />
                  </div>
                  <div className="data">
                    <p className="semi-bold">Youtube</p>
                    <p>mihir@youtube</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <Linkedin />
                  </div>
                  <div className="data">
                    <p className="semi-bold">Linkedin</p>
                    <p>mihir@linkedin</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="resume_right">
          <div className="resume_item resume_about">
            <div className="title">
              <p className="bold">About us</p>
            </div>
            <p>About</p>
          </div>
          <div className="resume_item resume_work">
            <div className="title">
              <p className="bold">Work Experience</p>
            </div>
            <ul>
              <li>
                <div className="date">Duration</div>
                <div className="info">
                  <p className="semi-bold">
                    AgencyName
                    <br /> Role
                  </p>
                  <p>About Job</p>
                </div>
              </li>
              {true && (
                <li>
                  <div className="date">Duration</div>
                  <div className="info">
                    <p className="semi-bold">
                      AgencyName
                      <br /> Role
                    </p>
                    <p>About Job</p>
                  </div>
                </li>
              )}
              {true && (
                <li>
                  <div className="date">Duration</div>
                  <div className="info">
                    <p className="semi-bold">
                      AgencyName
                      <br /> Role
                    </p>
                    <p>About Job</p>
                  </div>
                </li>
              )}
            </ul>
          </div>
          <div className="resume_item resume_education">
            <div className="title">
              <p className="bold">Education</p>
            </div>
            <ul>
              <li>
                <div className="date">Something</div>
                <div className="info">
                  <p className="semi-bold">AgencyName ( UniversitySchool)</p>
                  <p>ABout Job</p>
                </div>
              </li>
              {true && (
                <li>
                  <div className="date">Something</div>
                  <div className="info">
                    <p className="semi-bold">AgencyName ( UniversitySchool)</p>
                    <p>ABout Job</p>
                  </div>
                </li>
              )}
              {true && (
                <li>
                  <div className="date">Something</div>
                  <div className="info">
                    <p className="semi-bold">AgencyName ( UniversitySchool)</p>
                    <p>About Job</p>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 right-10 flex items-center gap-4">
        <ArrowDownToLine
          onClick={printDocument}
          className="text-white"
        />
        <Home
          onClick={() => router.push("/")}
          className="text-white"
        />
      </div>
    </>
  );
};

export default Template;
