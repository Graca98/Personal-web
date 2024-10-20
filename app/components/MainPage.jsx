import "./MainPage.css";
import Link from "next/link";

import ScrollButtons from "./ScrollButtons";
import Badge from "./Badge";
import Projects from "./Projects";
import CopyButton from "./CopyButton";

// Icons
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaBlackTie } from "react-icons/fa6";

export default function MainPage() {
  // const sectionRef = useRef(null)
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-12 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:max-h-screen lg:min-h-screen lg:w-1/2 lg:top-0 lg:py-24 lg:sticky flex flex-col lg:justify-between">
          <section className="mb-12">
            {/* ========== Úvod ========== */}
            <h1 className="text-5xl text-slate-200 font-bold text mb-3">
              Denis Gracias
            </h1>
            <h2 className="text-xl text-slate-200 font-semibold mb-3">
              Junior Frontend Developer
            </h2>
            <h3 className="max-w-xs">
              Tvořím moderní, přístupné a vizuálně působivé webové stránky.
            </h3>

            {/* ========== Navigation ========== */}
            <ScrollButtons />
          </section>

          {/* ========== Icons ========== */}
          <section className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
              <Link href="https://github.com/Graca98" target="_blank">
                <FaGithub className="hover:text-slate-200 atcite:text-slate-100 h-6 w-6" />
              </Link>
              <Link href="https://www.instagram.com/gracous1/" target="_blank">
                <FaInstagram className="hover:text-white h-6 w-6" />
              </Link>
              <Link href="https://www.facebook.com/Gracous1234" target="_blank">
                <FaFacebook className="hover:text-white h-6 w-6" />
              </Link>
              <Link
                href="https://www.itnetwork.cz/portfolio/117628"
                target="_blank"
              >
                <FaBlackTie className="hover:text-white h-6 w-6" />
              </Link>
            </div>
            <div className="">
              <CopyButton
                copy="denisgracias98@gmail.com"
                style="flex gap-2 md:hover:text-white break-all"
              />
            </div>
          </section>
        </header>

        <main className="lg:w-1/2 pt-24 lg:pb-24">
          {/* ========== About me ========== */}
          <section
            id="aboutme"
            className="mb-16 md:mb-24 lg:mb-36 scroll-mt-16 lg:scroll-mt-24"
          >
            <h2 className="font-bold text-2xl mb-4 lg:hidden sticky-headline">
              O mně
            </h2>
            <p className="mb-4 leading-relaxed">
              V roce 2022, když jsem pracoval na letišti v Amsterdamu, jsem se
              seznámil s kamarádem, který se začal sám učit tvořit webové
              stránky. Jeho nadšení mě natolik zaujalo, že jsem se k němu přidal
              a společně jsme si pomáhali s učením základů HTML, CSS a
              JavaScriptu. Po návratu do Česka jsem si udělal kurz od{" "}
              <span className="main-bold">ITNetworku</span> zaměřený na vývoj
              webových aplikací, a to mě zavedlo hlouběji do světa web
              developmentu.
            </p>
            <p className="mb-4 leading-relaxed">
              Od té doby jsem pracoval na vlastních projektech, včetně jednoho
              pro Minecraft server, kde jsem využil API na načítání skinů hráčů.
              V současné době se soustředím na frontend vývoj webových stránek
              podle předem určeného designu a postupně se více nořím do práce s
              API.
            </p>
            <p className="mb-4 leading-relaxed">
              Nejvíce mě na vývoji baví pozorovat, jak se řádky kódu mění v
              krásné a funkční webové stránky, a mít možnost sledovat celý
              proces vývoje aplikace od nápadu až po finální produkt.
            </p>
            <p className="mb-4 leading-relaxed">
              Jsem hrdý na svou{" "}
              <span className="main-bold">Minecraft stránku</span>, která
              asynchronně načítá skiny hráčů, a na{" "}
              <span className="main-bold">todo aplikaci</span>, kde uživatelé
              mohou spravovat své úkoly, které se ukládají do{" "}
              <span className="main-bold">MongoDB</span>.
            </p>
            <p className="mb-4 leading-relaxed">
              Když zrovna nepracuji, rád si zahraji videohry, nebo vymýšlím nové
              projekty na kterých se zároveň učím více o frontend developmentu.
              A když mě zrovna nezastihnete u počítače, vyrážím na posezení s
              kamarády nebo cestuji po památkách.
            </p>
          </section>

          {/* ========== Zkušenosti ========== */}
          <section
            id="experience"
            className="mb-16 md:mb-24 lg:mb-36 scroll-mt-16 lg:scroll-mt-24"
          >
            <h2 className="font-bold text-2xl mb-4 sticky-headline">
              Zkušenosti
            </h2>

            {/* Fast */}
            <div className="grid lg:grid-cols-8 mb-6 md:hover:bg-gray-800 md:hover:rounded-lg md:-mx-4 md:px-4 py-4">
              <div className="col-span-2 mt-[2px] mb-2 lg:mb-0">
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
                  <Badge skill="MS Office" />
                  <Badge skill="SAP" />
                  <Badge skill="Azure DevOps" />
                  <Badge skill="HTML/CSS" />
                  <Badge skill="JavaScript" />
                </ul>
              </div>
            </div>

            {/* Kurz */}
            <div className="grid lg:grid-cols-8 mb-6 md:hover:bg-gray-800 md:hover:rounded-lg md:-mx-4 md:px-4 py-4">
              <div className="col-span-2 mt-[2px] mb-2 lg:mb-0">
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
                <ul className="flex flex-wrap gap-2">
                  {/* <li className="px-3 py-1 rounded-full bg-sky-950 text-sky-400"> */}
                  <Badge skill="JavaScript" />
                  <Badge skill="React" />
                  <Badge skill="Next.js" />
                  <Badge skill="Bootstrap" />
                  <Badge skill="TailwindCSS" />
                </ul>
              </div>
            </div>

            {/* Ramp agent */}
            <div className="grid lg:grid-cols-8 mb-6 md:hover:bg-gray-800 md:hover:rounded-lg md:-mx-4 md:px-4 py-4">
              <div className="col-span-2 mt-[2px] mb-2 lg:mb-0">
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
            <div className="grid lg:grid-cols-8 mb-6 md:hover:bg-gray-800 md:hover:rounded-lg md:-mx-4 md:px-4 py-4">
              <div className="col-span-2 mt-[2px] mb-2 lg:mb-0">
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
          <Projects />

          <footer>
            <p className="text-xs">
              Navrženo ve <span className="footer-bold">Figmě</span> a kódováno
              ve <span className="footer-bold">Visual Studio Code</span>.
              Vytvořeno pomocí <span className="footer-bold">Next.js</span> a{" "}
              <span className="footer-bold">Tailwind CSS</span>, nasazeno přes{" "}
              <span className="footer-bold">Netlify</span>. Design je inspirován
              tvorbou <span className="footer-bold">Brittany Chiang</span>.
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
