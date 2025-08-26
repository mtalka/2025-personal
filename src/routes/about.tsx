import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 font-light tracking-wide text-justify">
        <p>
          Welcome to my humble website. My name is Markus Talka. I am web developer and
          software industry professional, residing in Helsinki, Finland. My main
          interests are in front-end development, and user experience, but I
          also enjoy working with back-end technologies, platform development,
          and exploring new tools and frameworks.
        </p>
        <p>
          Currently I am happily employed at Columbia Road as a Senior
          Consultant, with an emphasis on creating measurable growth for our
          clients' businesses.
        </p>
        <p>
          In my free time I am an avid guitar player, always wishing I had more
          time to spend practicing and composing music. I try to learn something
          new every day, and I try to stay curious to new things the world has
          to offer, despite whatever turmoil our times may bring.
        </p>
        <p>Feel free to be in touch.</p>
      </div>
      <ul>
        <li>
          <a
            className="text-cyan-500 hover:text-cyan-700"
            target="_blank"
            href="https://www.linkedin.com/in/markustalka/"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className="text-cyan-500 hover:text-cyan-700"
            target="_blank"
            href="https://instagram.com/mtalka/"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            className="text-cyan-500 hover:text-cyan-700"
            target="_blank"
            href="https://github.com/mtalka/"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}
