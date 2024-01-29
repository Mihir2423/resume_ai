import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Education = ({ setEducationList, setEducation, education }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 items-center w-[600px]">
        <div className="col-span-1">
          <label className="text-blue-50 text-sm">School Name</label>
          <Input
            type="text"
            value={education.school}
            placeholder="Enter your school name"
            className="mt-2"
            onChange={(e) =>
              setEducation((prev) => ({ ...prev, school: e.target.value }))
            }
          />
        </div>
        <div className="col-span-1">
          <label className="text-blue-50 text-sm">Field Of Study</label>
          <Input
            type="text"
            placeholder="Enter your position"
            className="mt-2"
            value={education.field_of_study}
            onChange={(e) =>
              setEducation((prev) => ({
                ...prev,
                field_of_study: e.target.value,
              }))
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 items-center w-[600px]">
        <div className="col-span-1">
          <label className="text-blue-50 text-sm">Start Year</label>
          <Input
            type="date"
            value={education.start_year}
            placeholder="Enter your position"
            className="mt-2"
            onChange={(e) =>
              setEducation((prev) => ({ ...prev, start_year: e.target.value }))
            }
          />
        </div>
        <div className="col-span-1">
          <label className="text-blue-50 text-sm">End Year</label>
          <Input
            type="date"
            value={education.end_year}
            className="mt-2"
            onChange={(e) =>
              setEducation((prev) => ({ ...prev, end_year: e.target.value }))
            }
          />
        </div>
      </div>
      <div>
        <label className="text-blue-50 text-sm">Degree</label>
        <Input
          type="text"
          value={education.degree}
          placeholder="Enter your degree"
          className="mt-2"
          onChange={(e) =>
            setEducation((prev) => ({ ...prev, degree: e.target.value }))
          }
        />
      </div>
      <div>
        <label className="text-blue-50 text-sm">Description</label>
        <Input
          type="text"
          value={education.description}
          placeholder="Write your description"
          className="mt-2"
          onChange={(e) =>
            setEducation((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </div>
      <Button
        variant="secondary"
        type="button"
        onClick={() => {
          setEducationList((prev) => [...prev, { ...education }]);
          setEducation({
            school: "",
            degree: "",
            field_of_study: "",
            start_year: "",
            end_year: "",
            description: "",
          });
        }}
      >
        Add
      </Button>
    </div>
  );
};

export default Education;
