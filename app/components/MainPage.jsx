'use client'

import "./MainPage.css";
import Link from "next/link";

import LinkPreviw from "./LinkPreview";
import Badge from "./Badge"

export default function MainPage() {
  // const sectionRef = useRef(null)
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:max-h-screen w-1/2 lg:top-0 py-24 lg:sticky">
          <section className="mb-12">
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

          {/* <section className="flex flex-col gap-2">
            <Link href="#aboutme" className="hover:text-slate-200 hover:font-bold active:text-slate-100">— O mně</Link>
            <Link href="#experience" className="hover:text-slate-200 hover:font-bold active:text-slate-100">— Zkušenosti</Link>
            <Link href="#projects" className="hover:text-slate-200 hover:font-bold active:text-slate-100">— Projekty</Link>
          </section> */}
          <section className="flex flex-col gap-2">
            {/* <button href="#aboutme" className="hover:text-slate-200 hover:font-bold active:text-slate-100">— O mně</button> */}
            <button  className="hover:text-slate-200 hover:font-bold active:text-slate-100">— Zkušenosti</button>
            {/* <button href="#projects" className="hover:text-slate-200 hover:font-bold active:text-slate-100">— Projekty</button> */}
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
            <div className="grid grid-cols-8 mb-6 hover:bg-gray-800 hover:rounded-lg p-4">
              <div className="col-span-2 mt-[2px]">
                <p>2023 — 2024</p>
              </div>
              <div className="col-span-6 w-fit">
                <h3 className="text-xl text-slate-200 font-semibold mb-4">
                  Vývojář junior, B2C support koordinátor · FAST ČR, a.s.
                </h3>
                <p className="text-sm mb-4">
                  Vývoj a přidávání obsahu na web Planeo.cz
                </p>
                <ul className="flex flex-wrap gap-2">
                  {/* <li className="px-3 py-1 rounded-full bg-sky-950 text-sky-400"> */}
                  <Badge skill="MS Office"/>
                  <Badge skill="SAP"/>
                  <Badge skill="Azure DevOps"/>
                  <Badge skill="HTML/CSS"/>
                  <Badge skill="JavaScript"/>
                  
                </ul>
              </div>
            </div>

            {/* Kurz */}
            <div className="grid grid-cols-8 mb-6 hover:bg-gray-800 hover:rounded-lg p-4">
              <div className="col-span-2 mt-[2px]">
                <p>2023 — 2023</p>
              </div>
              <div className="col-span-6 w-fit">
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
                  <Badge skill="JavaScript"/>
                  <Badge skill="React"/>
                  <Badge skill="Next.js"/>
                  <Badge skill="Bootstrap"/>
                  <Badge skill="TailwindCSS"/>
                </ul>
              </div>
            </div>

            {/* Ramp agent */}
            <div className="grid grid-cols-8 mb-6 hover:bg-gray-800 hover:rounded-lg p-4">
              <div className="col-span-2 mt-[2px]">
                <p>2022 — 2023</p>
              </div>
              <div className="col-span-6 w-fit">
                <h3 className="text-xl text-slate-200 font-semibold mb-4">
                  Ramp agent · Menzies Aviation, Amsterdam NL
                </h3>
                <p className="text-sm mb-4">Nakládání a vykládání letadel</p>
              </div>
            </div>

            {/* Seřizovač */}
            <div className="grid grid-cols-8 mb-6 hover:bg-gray-800 hover:rounded-lg p-4">
              <div className="col-span-2 mt-[2px]">
                <p>2019 — 2022</p>
              </div>
              <div className="col-span-6 w-fit">
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
              skills={["NextJS", "TailwindCSS", "RippleUI", "React Icons"]}
            >
            </LinkPreviw>
            <LinkPreviw
              url={"https://graca98.github.io/NextJS-Todo-App/"}
              webImage={"/img/web-previews/TodoApp.png"}
              skills={["NextJS", "TailwindCSS", "MongoDB"]}
            ></LinkPreviw>
            <LinkPreviw
              url={"https://graca98.github.io/PojisteniApp-Project/index.html?"}
              webImage={"/img/web-previews/Pojisteni.png"}
              skills={["HTML", "CSS", "JavaScript", "Bootstrap"]}
            ></LinkPreviw>
            <LinkPreviw
              url={"https://graca98.github.io/kalkulacka/"}
              webImage={"/img/web-previews/Kalkulacka.png"}
              skills={["HTML", "CSS", "JavaScript"]}
            ></LinkPreviw>
          </section>
          <footer>
            <p className="text-xs">Zde bude finální text + od koho mam inspiraci</p>
          </footer>
        </main>
      </div>
    </div>
  );
}
