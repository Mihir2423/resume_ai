"use client";

import AboutDetail from "@/components/form/about";
import Experience from "@/components/form/experience";
import UserDetail from "@/components/form/user-detail";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useLocalStorage } from "@/utils/use-storage";
import React from "react";
import { useForm } from "react-hook-form";

const FormPage = () => {
  const tabs = [
    {
      name: "User Details",
      i: 0,
    },
    {
      name: "About User",
      i: 1,
    },
    {
      name: "Work Experience",
      i: 2,
    },
    {
      name: "Education",
      i: 3,
    },
    {
      name: "Final",
      i: 4,
    },
  ];
  const [activeTab, setActiveTab] = React.useState(0);
  const [experience, setExperience] = React.useState({
    company: "",
    position: "",
    start_year: "",
    end_year: "",
    description: "",
  });
  const [experienceList, setExperienceList] = React.useState([]);
  const [education, setEducation] = React.useState({
    school: "",
    degree: "",
    field_of_study: "",
    start_year: "",
    end_year: "",
    description: "",
  });
  const userDetails = useLocalStorage("userDetails");
  const id = userDetails?._id;
  const form = useForm({
    defaultValues: {
      name: "",
      gender: "",
      role: "",
      email: "",
      phone: "",
      profile_image: "",
      address: "",
      skype: "",
      linkedin: "",
      github: "",
      about_me: "",
      education: education,
      skills: [
        {
          skill: "",
        },
      ],
    },
  });

  const onSubmit = async (values) => {
    console.log({ ...values, user_id: id, experience: experienceList });
  };

  return (
    <div className="md:min-h-screen p-24 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500 to-zinc-900">
      <div className="flex items-center justify-center w-full">
        <div className="flex gap-6 items-center justify-center">
          {tabs?.map((item, i) => (
            <Button
              key={i}
              variant="custom"
              onClick={() => setActiveTab(i)}
              className={`min-w-[200px] ${activeTab === i ? "bg-blue-600" : "bg-blue-400"}`}
            >
              {item?.name}
            </Button>
          ))}
        </div>
      </div>
      <div className="flex justify-center py-12 mt-5">
        <div className="w-1/2 e bg-gradient-to-r from-black to-blue-400 p-4 rounded-lg overflow-hidden">
          <Form {...form}>
            <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
              {activeTab === 0 && <UserDetail form={form} />}
              {activeTab === 1 && <AboutDetail form={form} />}
              {activeTab === 2 && (
                <Experience
                  setExperienceList={setExperienceList}
                  setExperience={setExperience}
                  experience={experience}
                />
              )}
              {activeTab === 3 && <UserDetail form={form} />}
              {activeTab === 4 && <UserDetail form={form} />}
              {activeTab === 4 ? (
                <Button type="submit" variant="custom" className="w-full">
                  Submit
                </Button>
              ) : (
                <div className="flex items-center gap-6">
                  <Button
                    type="button"
                    onClick={() => setActiveTab(activeTab - 1)}
                    variant="custom"
                    disabled={activeTab === 0}
                    className="w-[140px]"
                  >
                    Previous
                  </Button>
                  <Button
                    type="button"
                    disabled={activeTab === 4}
                    variant="custom"
                    onClick={() => setActiveTab(activeTab + 1)}
                    className="w-[140px]"
                  >
                    Next
                  </Button>
                </div>
              )}
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default FormPage;
