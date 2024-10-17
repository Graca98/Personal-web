import LinkPreviw from "./LinkPreview";

export default function Projects() {
  return (
    <section id="projects" className="mb-16 md:mb-24 lg:mb-36 scroll-mt-16 lg:scroll-mt-24">
      <h2 className="font-bold text-2xl mb-4 sticky-headline">Projekty</h2>
      <LinkPreviw
        url={"https://graca98.github.io/Terminus-Page/"}
        webImage={"/img/web-previews/TerminusPage.png"}
        skills={["NextJS", "TailwindCSS", "RippleUI", "React Icons"]}
      />
      <LinkPreviw
        url={"https://graca98.github.io/NextJS-Todo-App/"}
        webImage={"/img/web-previews/TodoApp.png"}
        skills={["NextJS", "TailwindCSS", "MongoDB"]}
      />
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
