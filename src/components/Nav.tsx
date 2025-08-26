import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "@tanstack/react-router";

const navigation = [
  { name: "Work", to: "/" },
  { name: "Education", to: "/education" },
  { name: "About me", to: "/about" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  return (
    <Disclosure
      as="nav"
      id="navigation"
      className="mx-auto max-w-4xl border-b-2"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <div className="shrink-0 flex items-start">
              <Link to="/">
                <h1
                  className="antialiased font-bold text-2xl leading-[0.8] uppercase dark:normal-case"
                  aria-label="Site name"
                >
                  Markus Talka
                </h1>
              </Link>
              <span className="text-[0.6rem]" aria-label="Smiley face">
                <svg
                  className="dark:invert"
                  width="7"
                  height="8"
                  viewBox="0 0 7 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="3.5"
                    cy="3.5"
                    r="3.2"
                    stroke="black"
                    stroke-width="0.6"
                  />
                  <circle cx="2.56576" cy="2.68294" r="0.583333" fill="black" />
                  <circle cx="4.4349" cy="2.68294" r="0.583333" fill="black" />
                  <path
                    d="M1.84375 3.84961V3.84961C2.45898 5.32184 4.53121 5.35925 5.19917 3.91017L5.22708 3.84961"
                    stroke="black"
                    stroke-width="0.6"
                  />
                </svg>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{
                      "aria-current": "page",
                      className:
                        "bg-gray-100 text-black dark:bg-stone-800 dark:text-stone-100",
                    }}
                    className={classNames(
                      "text-gray-800 hover:bg-black/5 hover:text-black dark:text-stone-100 dark:hover:bg-stone-900 dark:hover:text-white",
                      "px-3 py-2 text-sm test-text font-medium uppercase"
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <DisclosureButton
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-black/5 hover:text-black dark:text-stone-100 dark:hover:bg-stone-900 dark:hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
              aria-expanded="false"
              aria-controls="mobile-menu"
              aria-label="Toggle mobile menu"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel id="mobile-menu" className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3 flex flex-col items-end">
          {navigation.map((item) => (
            <DisclosureButton
              as={Link}
              key={item.name}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                "aria-current": "page",
                className:
                  "bg-gray-100 text-black dark:bg-stone-800 dark:text-stone-100",
              }}
              className={classNames(
                "w-fit text-gray-800 hover:bg-black/5 hover:text-black dark:text-stone-100 dark:hover:bg-stone-900 dark:hover:text-white  ",
                "px-3 py-2 text-sm test-text font-medium uppercase"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
