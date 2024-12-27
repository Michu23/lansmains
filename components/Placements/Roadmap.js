import React from "react";

const RoadmapSection = ({ step, title, items }) => {
  return (
    <>
      <div className="d-flex gap-2 align-items-center text-white">
        <div
          className="p-2"
          style={{
            backgroundColor: "#E7B057",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
          }}
        >
          {step}
        </div>
        <h3 className="h5 fw-bold m-0 p-0">{title}</h3>
      </div>
      <div
        style={{
          marginLeft: "20px",
          borderLeft: "2px solid #E7B057",
        }}
      >
        <div className="py-2"></div>
        {items.map((item, index) => (
          <p
            key={index}
            className="normal-text text-white text-start p-0 m-0 ps-4"
          >
            {item}
          </p>
        ))}
        <div className="py-3"></div>
      </div>
    </>
  );
};

const Roadmap = () => {
  const sections = [
    {
      step: 1,
      title: "Learn",
      items: [
        "Comprehensive Language Courses",
        <>
          <b>Tailored Curriculum:</b> Courses designed specifically for
          healthcare professionals.
        </>,
        <>
          <b>Language Offerings:</b> Extensive range of languages including
          German, French, and more.
        </>,
        <>
          <b>Skill Development:</b> Courses structured to enhance both general
          vocabulary and medical-specific terminology.
        </>,
      ],
    },
    {
      step: 2,
      title: "Certify",
      items: [
        "Certification",
        <>
          <b>Language Proficiency:</b> Certification in language proficiency.
        </>,
        <>
          <b>Medical Terminology:</b> Certification in medical terminology.
        </>,
        <>
          <b>Industry Recognition:</b> Certification recognized by industry
          professionals.
        </>,
      ],
    },
    {
      step: 3,
      title: "Placement",
      items: [
        "Placement",
        <>
          <b>Job Placement:</b> Assistance in finding a job.
        </>,
        <>
          <b>Global Opportunities:</b> Placement opportunities around the world.
        </>,
        <>
          <b>Industry Connections:</b> Access to our network of industry
          professionals.
        </>,
      ],
    },
  ];

  return (
    <div>
      {sections.map((section, index) => (
        <RoadmapSection
          key={index}
          step={section.step}
          title={section.title}
          items={section.items}
        />
      ))}
    </div>
  );
};

export default Roadmap;
