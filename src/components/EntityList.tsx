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
    <div role="region" aria-label="Experience timeline">
      <ul role="list" className="divide-y divide-gray-100">
        {data.map((item) => (
          <li
            key={item.entity}
            className="flex flex-col sm:flex-row justify-between gap-x-6 py-5 [&:first-child]:pt-0"
          >
            <div className="flex min-w-0 gap-x-4 sm:shadow-sm dark:sm:shadow-black/10 flex-col w-full sm:w-52 h-full">
              <div
                style={{ background: item.entityColor }}
                className="grain h-4 sm:h-8 relative overflow-hidden uppercase text-xl font-semibold p-2 opacity-95"
                role="banner"
                aria-label={`${item.entity} section`}
              >
                <svg
                  style={{ mixBlendMode: "overlay", opacity: item.grainOpacity }}
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute w-full h-full pointer-events-none"
                  aria-hidden="true"
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
              <div className="pt-1 px-1 sm:p-2 sm:pb-4">
                <h2 className="test-text font-semibold uppercase mt-2 sm:mt-0">{item.entity}</h2>
                <p className="text-sm/6 font-medium text-gray-900 dark:text-stone-100">
                  {item.entries[item.entries.length - 1].durationStart} -{" "}
                  {item.entries[0].durationEnd}
                </p>
              </div>
            </div>

            <div className="flex flex-col p-1 sm:p-0 mt-2 sm:mt-0 gap-2 sm:gap-4 w-full">
              {item.entries.map((entry) => (
                <article
                  className="flex items-between [&:not(:first-child)]:border-t border-gray-200 dark:border-stone-800 [&:not(:first-child)]:pt-2"
                  key={entry.title}
                >
                  <div className="min-w-0 flex-auto">
                    <h3 className="text-sm/6 sm:text-base/6 font-semibold text-gray-900 dark:text-stone-100">
                      {entry.title}
                    </h3>
                    <div className="mt-1 lg:max-w-3/4 text-xs/5 sm:text-sm/5 tracking-wide font-light text-gray-600 dark:text-stone-100 whitespace-pre-line">
                      {entry.description}
                    </div>
                  </div>
                  <div className="font-medium shrink-0 flex flex-col items-end">
                    <p className="text-sm/6 text-gray-900 dark:text-stone-100">
                      {entry.durationStart} - {entry.durationEnd}
                    </p>
                    <p className="text-sm/6 text-gray-900 dark:text-stone-100">{entry.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
