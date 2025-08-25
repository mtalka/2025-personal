import EntityList from "./EntityList";

const experience = [
  {
    entity: "Columbia Road",
    entityColor: "#002a39",
    grainOpacity: 0.6,
    entries: [
      {
        title: "Senior Consultant",
        description:
          "Full-stack development, IT project leadership, and recruiting.",
        durationStart: "Jan 2023",
        durationEnd: "Present",
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

    //     >
    //       <div className="flex min-w-0 gap-x-4 sm:shadow-sm flex-col w-full sm:w-52 sm:min-h-32">
    //         <div
    //           style={{
    //             background: experience.companyColor,
    //           }}
    //           className={`grain min-h-24 relative overflow-hidden uppercase text-xl font-semibold p-2 flex-1 opacity-95`}
    //         >
    //           <svg
    //             style={{
    //               mixBlendMode: "overlay",
    //               opacity: experience.grainOpacity,
    //             }}
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="absolute w-full h-full pointer-events-none"
    //           >
    //             <filter id="noiseFilter">
    //               <feTurbulence
    //                 type="fractalNoise"
    //                 baseFrequency="0.65"
    //                 numOctaves="3"
    //                 stitchTiles="stitch"
    //               />
    //               <feColorMatrix in="turbulence" type="saturate" values="0" />
    //             </filter>
    //             <rect width="100%" height="100%" filter="url(#noiseFilter)" />
    //           </svg>
    //         </div>
    //         <div className="pt-1 sm:p-2 sm:pb-4">
    //           <p className="test-text font-semibold uppercase">
    //             {experience.company}
    //           </p>
    //           <p className="text-sm/6 font-medium text-gray-900">
    //             {
    //               experience.positions[experience.positions.length - 1]
    //                 .durationStart
    //             }{" "}
    //             - {experience.positions[0].durationEnd}
    //           </p>
    //         </div>
    //       </div>
    //       <div className="flex flex-col mt-2 sm:mt-0 gap-2 sm:gap-4 w-full">
    //         {experience.positions.map((position) => (
    //           <div
    //             className="flex items-between [&:not(:first-child)]:border-t border-gray-200 [&:not(:first-child)]:pt-2"
    //             key={position.title}
    //           >
    //             <div className="min-w-0 flex-auto">
    //               <p className="text-sm/6 sm:text-base/6 font-semibold text-gray-900">
    //                 {position.title}
    //               </p>
    //               <p className="mt-1 lg:max-w-3/4 text-xs/5 sm:text-sm/5 tracking-wide font-light text-gray-600">
    //                 {position.description}
    //               </p>
    //             </div>
    //             <div className="font-medium shrink-0 flex flex-col items-end">
    //               <p className="text-sm/6 text-gray-900">
    //                 {position.durationStart} - {position.durationEnd}
    //               </p>
    //               <p className="text-sm/6 text-gray-900">{position.location}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </li>
    //   ))}
    // </ul>