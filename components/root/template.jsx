"use client";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {
  ArrowDownToLine,
  FileVideo2,
  Github,
  Home,
  Linkedin,
  Mail,
  Map,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "./template.css";

const Template = ({ resumeData }) => {
  const router = useRouter();
  console.log(resumeData);
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
                <p className="bold">{resumeData?.name}</p>
                <p className="regular">
                  {resumeData?.role} {resumeData?.age} <br />{" "}
                  {resumeData?.gender}
                </p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <Map />
                  </div>
                  <div className="data">{resumeData?.address}</div>
                </li>
                <li>
                  <div className="icon">
                    <Smartphone />
                  </div>
                  <div className="data">{resumeData?.phone}</div>
                </li>
                <li>
                  <div className="icon">
                    <Mail />
                  </div>
                  <div className="data">{resumeData?.email}</div>
                </li>
                <li>
                  <div className="icon">
                    <FileVideo2 />
                  </div>
                  <div className="data">{resumeData?.skype}</div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_skills">
              <div className="title">
                <p className="bold">{"skill's"}</p>
              </div>
              <ul>
                {resumeData?.skills?.map((item) => (
                  <li key={item?._id}>
                    <div className="w-full">- {item?.skill}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="resume_item resume_social">
              <div className="title">
                <p className="bold">Social</p>
              </div>
              <ul>
                <li>
                  <div className="icon">
                    <Linkedin />
                  </div>
                  <div className="data">
                    <p className="semi-bold">Linkedin</p>
                    <p>@{resumeData?.linkedin?.split("/")?.[4]}</p>
                  </div>
                </li>
                <li>
                  <div className="icon">
                    <Github className="w-6 h-6" />
                  </div>
                  <div className="data">
                    <p className="semi-bold">Github</p>
                    <p>@{resumeData?.github?.split("/")?.[3]}</p>
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
            <p>{resumeData?.about_me}</p>
          </div>
          <div className="resume_item resume_work">
            <div className="title">
              <p className="bold">Work Experience</p>
            </div>
            <ul>
              {resumeData?.experience?.map((item, i) => (
                <li key={i}>
                  <div className="date">
                    {item?.start_year} - {item?.end_year}
                  </div>
                  <div className="info">
                    <p className="semi-bold">
                      {item?.company}
                      <br /> {item?.position}
                    </p>
                    <p>{item?.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="resume_item resume_education">
            <div className="title">
              <p className="bold">Education</p>
            </div>
            <ul>
              {resumeData?.education?.map((item, i) => (
                <li key={i}>
                  <div className="date">{item?.start_year} - {item?.end_year}</div>
                  <div className="info">
                    <p className="semi-bold">{item?.school} ( {item?.field_of_study} )</p>
                    <p>{item?.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="fixed bottom-5 right-10 flex items-center gap-4">
        <ArrowDownToLine onClick={printDocument} className="text-white" />
        <Home onClick={() => router.push("/")} className="text-white" />
      </div>
    </>
  );
};

export default Template;
