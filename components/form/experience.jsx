import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Experience = ({ setExperienceList, setExperience, experience }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 items-center w-[600px]">
        <div className="col-span-1">
          <label className="text-blue-50 text-sm">Company Name</label>
          <Input
            type="text"
            value={experience.company}
            placeholder="Enter your company name"
            className="mt-2"
            onChange={(e) =>
              setExperience((prev) => ({ ...prev, company: e.target.value }))
            }
          />
        </div>
        <div className="col-span-1">
          <label className="text-blue-50 text-sm">Position</label>
          <Input
            type="text"
            placeholder="Enter your position"
            className="mt-2"
            value={experience.position}
            onChange={(e) =>
              setExperience((prev) => ({ ...prev, position: e.target.value }))
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 items-center w-[600px]">
        <div className="col-span-1">
          <label className="text-blue-50 text-sm">Start Year</label>
          <Input
            type="date"
            value={experience.start_year}
            placeholder="Enter your position"
            className="mt-2"
            onChange={(e) =>
              setExperience((prev) => ({ ...prev, start_year: e.target.value }))
            }
          />
        </div>
        <div className="col-span-1">
          <label className="text-blue-50 text-sm">End Year</label>
          <Input
            type="date"
            value={experience.end_year}
            className="mt-2"
            onChange={(e) =>
              setExperience((prev) => ({ ...prev, end_year: e.target.value }))
            }
          />
        </div>
      </div>
      <div>
        <label className="text-blue-50 text-sm">Description</label>
        <Input
          type="text"
          value={experience.description}
          placeholder="Enter your company name"
          className="mt-2"
          onChange={(e) =>
            setExperience((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </div>
      <Button
        variant="secondary"
        type="button"
        onClick={() => {
          setExperienceList((prev) => [...prev, { ...experience }]);
          setExperience({
            company: "",
            position: "",
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

export default Experience;
