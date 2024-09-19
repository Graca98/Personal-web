import "./MainPage.css";
import LinkPreviw from "./LinkPreview";

export default function MainPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:max-h-screen w-1/2 lg:top-0 py-24 lg:sticky">
          <section className="">
            {/* ========== Úvod ========== */}
            <h1 className="text-5xl text-slate-200 font-bold text mb-3">
              Denis Gracias
            </h1>
            <h2 className="text-xl text-slate-200 font-semibold mb-3">
              Junior Frontend Developer
            </h2>
            <h3 className="max-w-xs">
              Zde bude krátký popis o tom co vytvářím a tak dále...
            </h3>
          </section>
        </header>

        <main className="w-1/2 py-24">
          {/* ========== About me ========== */}
          <section id="aboutme" className="mb-16 md:mb-24 lg:mb-36">
            <div></div>
            <p className="mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              quam excepturi repellat modi consectetur. Ratione similique
              molestias reiciendis ducimus unde fuga quasi. Odit facere et,
              maxime error obcaecati tempore saepe? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Dolorum ut similique quasi facilis
              eaque aliquam dignissimos corporis consequuntur tempora
              necessitatibus. Nemo nihil nobis quo repudiandae facilis quod,
              quidem soluta dolore.
            </p>
            <p className="mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Distinctio, totam illo animi laudantium eius laborum earum dolore
              magni, ipsa delectus esse rem ullam corrupti repellendus nulla
              nisi. Esse, hic nobis. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. In modi animi blanditiis aliquid dolorem eius
              excepturi quis, iusto labore inventore similique voluptates a
              sequi vero nostrum accusantium rerum provident sapiente!
            </p>
            <p className="mb-4 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima a
              amet magni ullam perspiciatis, doloremque quisquam commodi veniam
              ipsa, obcaecati eaque aut fugiat alias! Ipsum eum illum molestiae
              ducimus aperiam.
            </p>
          </section>

          {/* ========== Zkušenosti ========== */}
          <section id="experience" className="mb-16 md:mb-24 lg:mb-36">
            <h2 className="font-bold text-2xl mb-4">Moje zkušenosti</h2>
            <div className="flex gap-2 mb-12 hover:bg-gray-800 hover:rounded-lg p-4">
              <div className="w-36 mt-[2px]">
                <p>2023 — 2024</p>
              </div>
              <div className="w-fit">
                <h3 className="text-xl text-slate-200 font-semibold mb-4">
                  Vývojář junior, B2C support koordinátor · FAST ČR, a.s.
                </h3>
                <p className="text-sm mb-4">
                  Vývoj a přidávání obsahu na web Planeo.cz
                </p>
                <ul className="flex gap-2">
                  {/* <li className="px-3 py-1 rounded-full bg-sky-950 text-sky-400"> */}
                  <li className="px-3 py-1 text-sm rounded-full bg-cyan-950 text-teal-400">
                    MS Office
                  </li>
                  <li className="px-3 py-1 text-sm rounded-full bg-cyan-950 text-teal-400">
                    SAP
                  </li>
                  <li className="px-3 py-1 text-sm rounded-full bg-cyan-950 text-teal-400">
                    Azure DevOps
                  </li>
                  <li className="px-3 py-1 text-sm rounded-full bg-cyan-950 text-teal-400">
                    HTML/CSS
                  </li>
                  <li className="px-3 py-1 text-sm rounded-full bg-cyan-950 text-teal-400">
                    JavaScript
                  </li>
                </ul>
              </div>
            </div>

            {/* Kurz */}
            <div className="flex gap-2 mb-12 hover:bg-gray-800 hover:rounded-lg p-4">
              <div className="w-36 mt-[2px]">
                <p>2023 — 2023</p>
              </div>
              <div className="w-fit">
                <h3 className="text-xl text-slate-200 font-semibold mb-4">
                  Rekvalifikační kurz Programátor WWW aplikací JavaScript ·
                  ITnetwork s.r.o. - IT AKADEMIE
                </h3>
                <ul className="text-sm mb-4">
                  <li>
                    Základní konstrukce jazyka JavaScript (Zakončeno
                    certifikátem)
                  </li>
                  <li>Objektově-orientované programování v JavaScript</li>
                  <li>Debugging v JavaScriptu</li>
                  <li>Moderní webdesign</li>
                  <li>Node.js</li>
                  <li>JavaScript framework (React)</li>
                  <li>Bootstrap</li>
                  <li>UML</li>
                  <li>Návrhové vzory</li>
                  <li>Testování</li>
                  <li>Verzování</li>
                </ul>
                <ul className="flex gap-2">
                  {/* <li className="px-3 py-1 rounded-full bg-sky-950 text-sky-400"> */}
                  <li className="px-3 py-1 text-sm rounded-full bg-cyan-950 text-teal-400">
                    JavaScript
                  </li>
                  <li className="px-3 py-1 text-sm rounded-full bg-cyan-950 text-teal-400">
                    React
                  </li>
                  <li className="px-3 py-1 text-sm rounded-full bg-cyan-950 text-teal-400">
                    Next.js
                  </li>
                  <li className="px-3 py-1 text-sm rounded-full bg-cyan-950 text-teal-400">
                    Bootstrap
                  </li>
                  <li className="px-3 py-1 text-sm rounded-full bg-cyan-950 text-teal-400">
                    TailwindCSS
                  </li>
                </ul>
              </div>
            </div>

            {/* Ramp agent */}
            <div className="flex gap-2 mb-12 hover:bg-gray-800 hover:rounded-lg p-4">
              <div className="w-36 mt-[2px]">
                <p>2022 — 2023</p>
              </div>
              <div className="w-fit">
                <h3 className="text-xl text-slate-200 font-semibold mb-4">
                  Ramp agent · Menzies Aviation, Amsterdam NL
                </h3>
                <p className="text-sm mb-4">Nakládání a vykládání letadel</p>
              </div>
            </div>

            {/* Seřizovač */}
            <div className="flex gap-2 mb-12 hover:bg-gray-800 hover:rounded-lg p-4">
              <div className="w-36 mt-[2px]">
                <p>2019 — 2022</p>
              </div>
              <div className="w-fit">
                <h3 className="text-xl text-slate-200 font-semibold mb-4">
                  Seřizovač vstřikolisů · Wavin Czechia s.r.o.
                </h3>
                <p className="text-sm mb-4">
                  Seřízení, montáž a demontáž forem vstřikovacího stroje
                </p>
              </div>
            </div>
          </section>

          {/* ========== Projekty ========== */}
          <section id="projects" className="mb-16 md:mb-24 lg:mb-36">
            <h2 className="font-bold text-2xl mb-4">Projekty</h2>
            <LinkPreviw
              url={"https://graca98.github.io/Terminus-Page/"}
              webImage={"/img/web-previews/TerminusPage.png"}
            ></LinkPreviw>
            <LinkPreviw
              url={"https://graca98.github.io/NextJS-Todo-App/"}
              webImage={"/img/web-previews/TodoApp.png"}
            ></LinkPreviw>
            <LinkPreviw
              url={"https://graca98.github.io/PojisteniApp-Project/index.html?"}
              webImage={"/img/web-previews/Pojisteni.png"}
            ></LinkPreviw>
            <LinkPreviw
              url={"https://graca98.github.io/kalkulacka/"}
              webImage={"/img/web-previews/Kalkulacka.png"}
            ></LinkPreviw>
          </section>
          <footer></footer>
        </main>
      </div>
    </div>
  );
}
