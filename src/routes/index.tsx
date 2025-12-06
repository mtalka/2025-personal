import { createFileRoute } from "@tanstack/react-router";
import EntityList from "../components/EntityList";

export const Route = createFileRoute("/")({
  component: ExperienceList,
});

const experience = [
  {
    entity: "Columbia Road",
    entityColor: "#002a39",
    grainOpacity: 0.6,
    entries: [
      {
        title: "Managing Consultant",
        description:
          "Full-stack development, IT project leadership, recruiting and sales.",
        durationStart: "Nov 2025",
        durationEnd: "Present",
        location: "Helsinki",
      },
      {
        title: "Senior Consultant",
        description:
          "Full-stack development, IT project leadership, and recruiting.",
        durationStart: "Jan 2023",
        durationEnd: "Oct 2025",
        location: "Helsinki",
      },
      {
        title: "Consultant",
        description: "Full-stack development.",
        durationStart: "Aug 2021",
        durationEnd: "Jan 2023",
        location: "Helsinki",
      },
    ],
  },
  {
    entity: "Ecraft",
    entityColor: "#ffcb03",
    grainOpacity: 0.7,
    entries: [
      {
        title: "Software Developer",
        description:
          "Developed progressive web applications with an emphasis on front-end, participated in project scope definition and customer interaction, and utilized agile methodologies.",
        durationStart: "Mar 2019",
        durationEnd: "Jul 2021",
        location: "Espoo",
      },
    ],
  },
  {
    entity: "Wärtsilä",
    entityColor: "#0c6895",
    grainOpacity: 0.3,
    entries: [
      {
        title: "Solution Expert PDM/PLM",
        description:
          "Managed project delivery, stakeholder communication, and ICT vendors. Created solution proposals, performed integration and system testing, and acted as a project track lead.",
        durationStart: "Oct 2014",
        durationEnd: "Mar 2019",
        location: "Helsinki",
      },
      {
        title: "Trainee",
        description:
          "Performed PDM/PLM related work and testing coordination for the launch of a new solution.",
        durationStart: "May 2014",
        durationEnd: "Oct 2014",
        location: "Helsinki",
      },
    ],
  },
  {
    entity: "ICT-Portti",
    entityColor: "#e94424",
    grainOpacity: 0.6,
    entries: [
      {
        title: "Project Worker, intern",
        description:
          "Web design (HTML5, jQuery) and graphic design. Also handled project management duties and solution testing.",
        durationStart: "Aug 2013",
        durationEnd: "Nov 2013",
        location: "Turku",
      },
    ],
  },
  {
    entity: "City of Lieto",
    entityColor: "#fff2c7",
    grainOpacity: 0.8,
    entries: [
      {
        title: "Intern",
        description:
          "Provided IT end-user support, software and hardware installations, and server maintenance.",
        durationStart: "Mar 2012",
        durationEnd: "Jun 2012",
        location: "Lieto",
      },
    ],
  },
];

export default function ExperienceList() {
  return (
    <EntityList data={experience} />
  );
}