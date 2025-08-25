interface Entity {
  entity: string;
  entityColor: string;
  grainOpacity: number;
  entries: {
    title: string;
    description: string;
    durationStart: string;
    durationEnd: string;
    location: string;
  }[];
}

export default function EntityList({ data }: { data: Entity[] }) {
  return (
    <ul role="list" className="divide-y divide-gray-100">
      {data.map((item) => (
        <li
          key={item.entity}
          className="flex flex-col sm:flex-row justify-between gap-x-6 py-5 [&:first-child]:pt-0"
        >
          {/* Sidebar */}
          <div className="flex min-w-0 gap-x-4 sm:shadow-sm flex-col w-full sm:w-52 sm:min-h-32">
            <div
              style={{ background: item.entityColor }}
              className="grain min-h-24 relative overflow-hidden uppercase text-xl font-semibold p-2 flex-1 opacity-95"
            >
              <svg
                style={{ mixBlendMode: "overlay", opacity: item.grainOpacity }}
                xmlns="http://www.w3.org/2000/svg"
                className="absolute w-full h-full pointer-events-none"
              >
                <filter id="noiseFilter">
                  <feTurbulence
                    type="fractalNoise"
                    baseFrequency="0.65"
                    numOctaves="3"
                    stitchTiles="stitch"
                  />
                  <feColorMatrix in="turbulence" type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
              </svg>
            </div>
            <div className="pt-1 sm:p-2 sm:pb-4">
              <p className="test-text font-semibold uppercase">{item.entity}</p>
              <p className="text-sm/6 font-medium text-gray-900">
                {item.entries[item.entries.length - 1].durationStart} -{" "}
                {item.entries[0].durationEnd}
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-2 sm:mt-0 gap-2 sm:gap-4 w-full">
            {item.entries.map((entry) => (
              <div
                className="flex items-between [&:not(:first-child)]:border-t border-gray-200 [&:not(:first-child)]:pt-2"
                key={entry.title}
              >
                <div className="min-w-0 flex-auto">
                  <p className="text-sm/6 sm:text-base/6 font-semibold text-gray-900">
                    {entry.title}
                  </p>
                  <p className="mt-1 lg:max-w-3/4 text-xs/5 sm:text-sm/5 tracking-wide font-light text-gray-600">
                    {entry.description}
                  </p>
                </div>
                <div className="font-medium shrink-0 flex flex-col items-end">
                  <p className="text-sm/6 text-gray-900">
                    {entry.durationStart} - {entry.durationEnd}
                  </p>
                  <p className="text-sm/6 text-gray-900">{entry.location}</p>
                </div>
              </div>
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
