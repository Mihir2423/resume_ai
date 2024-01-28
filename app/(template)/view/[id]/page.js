import Template from "@/components/root/template";
import React from "react";

const getResumeData = async (id) => {
  const result = await fetch(`http://localhost:3000/api/resume/${id}`, {
    method: "GET",
  });
  if (result.ok) {
    const { data } = await result.json();
    return data;
  }
  return {};
};

const ViewResume = async ({ params }) => {
  const resumeData = await getResumeData(params.id);
  return (
    <div className="py-16">
      <Template resumeData={resumeData} />;
    </div>
  );
};

export default ViewResume;
