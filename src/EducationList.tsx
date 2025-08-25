import EntityList from "./EntityList";

const education = [
  {
    entity: "University of Turku",
    entityColor: "#003366",
    grainOpacity: 0.6,
    entries: [
      {
        title: "Master of Science (M.Sc.)",
        description:
          "Focused on software design, advanced programming techniques, software quality management, software security, privacy, and lean platform business design.",
        durationStart: "2018",
        durationEnd: "2021",
        location: "Turku",
      },
    ],
  },
  {
    entity: "Turku University of Applied Sciences",
    entityColor: "#00539B",
    grainOpacity: 0.7,
    entries: [
      {
        title: "Bachelor of Engineering (B.Eng.)",
        description:
          "Specialized in multimedia technology. Covered usability and UI design, product development, programming (Java, databases, algorithms), augmented reality applications, networking (Cisco CCNA 1 & 2), Linux servers, relational databases, open source software, and human-computer interaction.",
        durationStart: "2010",
        durationEnd: "2014",
        location: "Turku",
      },
    ],
  },
  {
    entity: "Rangsit University",
    entityColor: "#800000",
    grainOpacity: 0.5,
    entries: [
      {
        title: "Exchange Program",
        description:
          "Attended Rangsit International College (RIC) in Bangkok, Thailand as part of an exchange program, contributing to international studies and collaboration.",
        durationStart: "2012",
        durationEnd: "2012",
        location: "Bangkok, Thailand",
      },
    ],
  },
  {
    entity: "Liedon lukio",
    entityColor: "#999966",
    grainOpacity: 0.8,
    entries: [
      {
        title: "High School Diploma",
        description: "Completed general upper secondary education.",
        durationStart: "2005",
        durationEnd: "2008",
        location: "Lieto",
      },
    ],
  },
];

export default function EducationList() {
  return <EntityList data={education} />;
}
