import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useRouterState } from "@tanstack/react-router";

const navigation = [
  { name: "Work", to: "/" },
  { name: "Education", to: "/education" },
  { name: "About me", to: "/about" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const router = useRouterState();
  return (
    <Disclosure as="nav" className="mx-auto max-w-4xl border-b-2">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex w-full items-center justify-between">
            <div className="shrink-0 flex items-start">
              <h1 className="antialiased font-bold text-2xl leading-none">MARKUS TALKA</h1><span className="text-[0.6rem]">☺</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    aria-current={
                      router.location.pathname === item.to ? "page" : undefined
                    }
                    className={classNames(
                      router.location.pathname === item.to
                        ? "bg-gray-100 text-black"
                        : "text-gray-800 hover:bg-black/5 hover:text-black",
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
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-black/5 hover:text-black focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600">
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

      <DisclosurePanel className="md:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.to}
              aria-current={
                router.location.pathname === item.to ? "page" : undefined
              }
              className={classNames(
                router.location.pathname === item.to
                  ? "bg-gray-100 text-black"
                  : "text-gray-800 hover:bg-black/5 hover:text-black",
                "block rounded-md px-3 py-2 text-base test-text font-medium uppercase"
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
