import LinkPreviw from "./LinkPreview";
import Badge from "./Badge";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  const taskManagerSKills = ["Python", "SQL", "Pytest"];
  return (
    <section
      id="projects"
      className="mb-16 md:mb-24 lg:mb-36 scroll-mt-16 lg:scroll-mt-24"
    >
      <h2 className="font-bold text-2xl mb-4 sticky-headline">Projekty</h2>
      <LinkPreviw
        url={"https://nextjs-todo-list.netlify.app/"}
        webImage={"/img/web-previews/TodoApp.png"}
        skills={[
          "NextJS",
          "TailwindCSS",
          "Supabase",
          "React Icons",
          "React Swipeable",
        ]}
      />
      <LinkPreviw
        url={"https://graca98.github.io/Terminus-Page/"}
        webImage={"/img/web-previews/TerminusPage.png"}
        skills={["NextJS", "TailwindCSS", "RippleUI", "React Icons"]}
      />

      {/* Python aplikace */}
      <Link
        href={"https://github.com/Graca98/engeto-project-2"}
        target="_blank"
        className="cursor-pointer flex flex-col-reverse lg:flex-row items-start bg-[#0f172a] gap-3 text-left md:-mx-4 md:px-4 py-4 md:hover:bg-gray-800 md:hover:rounded-lg mb-4"
        style={{ textDecoration: "none" }}
      >
        <div className="pt-2 ">
          <Image
            src={"/img/web-previews/Empty.png"}
            alt={`Náhled konzolové aplikace`}
            width={200}
            height={48}
            className="m-0 border-2 rounded-md border-gray-700 md:hover:transform md:hover:scale-105 md:hover:duration-500 md:hover:ease-in-out"
          />
        </div>

        <div className="lg:px-4 lg:w-[60%]">
          <h3 className="text-xl text-slate-200 font-semibold mb-2">
            Terminálová aplikace v Pythonu + Pytest testy
          </h3>
          <p className="text-sm mb-2">
            Jednoduchá terminálová aplikace v Pythonu pro správu úkolů pomocí
            MySQL databáze. Umožňuje přidávání, zobrazování, úpravy a mazání
            úkolů.
          </p>
          <p className="text-xs opacity-50 mb-4">
            https://github.com/Graca98/engeto-project-2
          </p>
          <ul className="flex flex-wrap gap-2">
            {taskManagerSKills.map((skillName, index) => {
              return <Badge key={`${skillName}-${index}`} skill={skillName} />;
            })}
          </ul>
        </div>
      </Link>

      <LinkPreviw
        url={"https://graca98.github.io/PojisteniApp-Project/index.html?"}
        webImage={"/img/web-previews/Pojisteni.png"}
        skills={["HTML", "CSS", "JavaScript", "Bootstrap"]}
      />
      <LinkPreviw
        url={"https://graca98.github.io/kalkulacka/"}
        webImage={"/img/web-previews/Kalkulacka.png"}
        skills={["HTML", "CSS", "JavaScript"]}
      />
    </section>
  );
}
