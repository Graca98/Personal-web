import "./MainPage.css";

export default function MainPage() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:max-h-screen w-1/2 lg:top-0 py-24 lg:sticky">
          <section className="">
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
          <section id="experience" className="mb-16 md:mb-24 lg:mb-36">
            <h2 className="font-bold text-2xl mb-4">Moje zkušenosti</h2>
            <div className="flex gap-2 mb-12 hover:bg-gray-800 hover:rounded-lg p-4">
              <div className="w-36 mt-[2px]">
                <p>2019 — 2021</p>
              </div>
              <div className="w-fit">
                <h3 className="text-xl text-slate-200 font-semibold mb-4">
                  Seřizovač vstřikolisů
                </h3>
                <p className="text-sm mb-4">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
                  quia vitae magni ullam numquam amet, dignissimos nemo!
                  Doloribus, veritatis. Magnam fugit molestias molestiae impedit
                  autem repellendus omnis sapiente dolorem accusamus! Lorem,
                  ipsum dolor sit amet consectetur adipisicing elit. Quo totam
                  vel reprehenderit aliquid qui? Sunt repellendus excepturi
                  officia ullam ex ea corporis temporibus consequuntur libero
                  consequatur, ad, facere alias. Itaque? Lorem, ipsum dolor sit
                  amet consectetur adipisicing elit. Minima facere cum tempora
                  rem.
                </p>
                <ul className="flex gap-2">
                  {/* <li className="px-3 py-1 rounded-full bg-sky-950 text-sky-400"> */}
                  <li className="px-3 py-1 text-sm rounded-full bg-cyan-950 text-teal-400">
                    JavaScript
                  </li>
                  <li className="px-3 py-1 text-sm rounded-full bg-cyan-950 text-teal-400">
                    TypeScript
                  </li>
                  <li className="px-3 py-1 text-sm rounded-full bg-cyan-950 text-teal-400">
                    React
                  </li>
                </ul>
              </div>
            </div>

            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              quia vitae magni ullam numquam amet, dignissimos nemo! Doloribus,
              veritatis. Magnam fugit molestias molestiae impedit autem
              repellendus omnis sapiente dolorem accusamus! Lorem, ipsum dolor
              sit amet consectetur adipisicing elit. Quo totam vel reprehenderit
              aliquid qui? Sunt repellendus excepturi officia ullam ex ea
              corporis temporibus consequuntur libero consequatur, ad, facere
              alias. Itaque? Lorem, ipsum dolor.
            </div>
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              quia vitae magni ullam numquam amet, dignissimos nemo! Doloribus,
              veritatis. Magnam fugit molestias molestiae.
            </div>
          </section>
          <section id="projects" className="mb-16 md:mb-24 lg:mb-36">
            <h2 className="font-bold text-2xl mb-4">Projekty</h2>
            <div>Proejkt 1</div>
            <div>Proejkt 2</div>
            <div>Proejkt 3</div>
            <div>Proejkt 4</div>
            <div>Proejkt 5</div>
            <div>Proejkt 6</div>
          </section>
          <footer></footer>
        </main>
      </div>
    </div>
  );
}
