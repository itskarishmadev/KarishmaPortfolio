const Intro = () => {
  return (
    <div id="home">
      <div className="bg-[url('/pattern-code.png')] inset-0 opacity-[0.03] absolute pointer-events-none " />
      <div className="w-full text-center space-y-6 xl:pt-8  p-6">
        <div className="space-y-2 mt-20">
          <h1
            className="text-green-500 text-xl md:text-2xl font-semibold"
            x-data="{ visible: false }"
          >
            Hello World! I&apos;m
          </h1>
          <h1 className="text-3xl lg:text-4xl font-bold font-code tracking-tight text-white animated fadeInUp delay100">
            Karishma Pandiamannan
          </h1>
        </div>
        <p className="text-lg text-gray-300 max-w-xl mx-auto leading-relaxed animated fadeInUp delay200">
          Crafting elegant solutions to complex problems with clean code and
          innovative thinking. Welcome to my personal dev workspace where ideas
          come to life.
        </p>
        <div className="flex flex-wrap justify-center gap-6  ">
          <button
            className="py-3 px-5 bg-green-500 cursor-pointer hover:bg-green-600 text-gray-900 font-bold rounded-lg transition-all flex gap-2 animated fadeInUp delay500"
            onClick={() => {
              const Elements = document.getElementById("projects");
              Elements?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {"</>"}&nbsp;&nbsp;View Projects
          </button>
          <button
            className="py-3 px-5 cursor-pointer border-green-600 border text-green-600 font-bold rounded-lg transition-all flex gap-2 animated fadeInUp delay500"
            onClick={() => {
              const section = document.getElementById("contact");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {"</>"}&nbsp;&nbsp;Contact Me
          </button>
        </div>
      </div>
      <div className="w-full xl:w-3/4 mx-auto relative mb-12">
        <div className="workspace-container relative w-full aspect-video">
          {/* <!-- Neon --> */}
          <div className="absolute left-0 w-96 h-96 bg-purple-400/50 top-0 blur-3xl"></div>
          <div className="absolute right-0 w-96 h-96 bg-green-400/50 top-0 blur-3xl"></div>
          {/* <!-- Desk Surface --> */}
          <div className="absolute ajsklekajsnm bottom-[-4%] w-full h-40 border-2 border-gray-400 rounded-lg bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 neon-desk"></div>

          {/* <!-- Monitor --> */}
          <div className="absolute z-10 top-0 left-1/2 w-4/5 transform -translate-x-1/2 aspect-video bg-black rounded-lg border border-gray-600 shadow-lg flex ioajsklehsnm mb-24">
            {/* <!-- Monitor Stand --> */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-1/2 h-4 bg-gray-700 rounded-b-sm z-10"></div>

            {/* <!-- Monitor Screen --> */}
            <div className="flex-1 p-4 bg-gray-700 relative">
              {/* <!-- Terminal Window --> */}
              <div className="absolute inset-2 bg-black rounded border border-gray-700 flex ioajsklehsnm mklausjenrhtm">
                <div className="bg-gray-800 p-1 flex layhetgsjdcb gap-1 ">
                  <div className="flex gap-1 ">
                    <div className="w-2 h-2 bg-red-500 boalstehwqbj"></div>
                    <div className="w-2 h-2 bg-yellow-500 boalstehwqbj"></div>
                    <div className="w-2 h-2 bg-green-500 boalstehwqbj"></div>
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-400 font-code">
                    karishmadev-workspace
                  </div>
                </div>
                <div className="p-2 flex-1 font-mono text-xs lg:text-sm overflow-hidden whitespace-pre">
                  <pre className="text-green-500 leading-relaxed">
                    {`          _____                      ${"itskarishmadev-workspace"}
         /     \\    `}
                    <span className="text-yellow-400">
                      itskarishmadev-workspace
                    </span>
                    {`
        | () () |   `}
                    <span className="text-gray-400">------------------</span>
                    {`
         \\  ^  /    `}
                    <span className="text-purple-400">Role:</span>{" "}
                    <span className="text-gray-300">Frontend Deeloper</span>
                    {`
          |||||     `}
                    <span className="text-purple-400">Languages:</span>{" "}
                    <span className="text-gray-300">
                      JavaScript, TypeScript
                    </span>
                    {`
          |||||     `}
                    <span className="text-purple-400">Tools:</span>{" "}
                    <span className="text-gray-300">
                      VSCode, Git, Figma,Postman
                    </span>
                    {`
                   `}{" "}
                    <span className="text-purple-400">Stack:</span>{" "}
                    <span className="text-gray-300">
                      React, Next.js, TailwindCSS
                    </span>
                    {`
                   `}{" "}
                    <span className="text-purple-400">Focus:</span>{" "}
                    <span className="text-gray-300">
                      UI development, API integration, performance optimization
                    </span>
                    {`
                   `}{" "}
                    <span className="text-purple-400">API Integration:</span>{" "}
                    <span className="text-gray-300">
                      RESTful APIs, Axios, Fetch API, JSON
                    </span>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Laptop --> */}
          <div className="absolute bottom-2 right-8 w-2/5 aspect-video  animated fadeInRight delay300 z-10 ">
            {/* <!-- Laptop Stand --> */}
            <div className="absolute bottom-2 sm:bottom-7 w-full h-4 bg-gray-700 right-0 rounded-b-lg"></div>
            {/* <!-- Laptop Screen --> */}
            <div className="absolute bottom-[calc(25%-1px)] w-full aspect-video bg-gray-700 border border-gray-700 rounded-t-lg mklausjenrhtm flex ioajsklehsnm origin-bottom px-1">
              {/* <!-- Laptop Frame --> */}
              <div className="h-1 bg-gray-700 flex layhetgsjdcb yhansklopals">
                <div className="w-1 h-1 bg-gray-500 boalstehwqbj"></div>
              </div>

              {/* <!-- VSCode Screen --> */}
              <div className="flex-1 bg-black flex">
                {/* <!-- Side Bar --> */}
                <div className="w-1/6 bg-gray-800 flex ioajsklehsnm layhetgsjdcb py-1 gap-1">
                  <div className="w-3 h-3 bg-gray-700 rounded"></div>
                  <div className="w-3 h-3 bg-gray-700 rounded"></div>
                  <div className="w-3 h-3 bg-green-700 rounded"></div>
                  <div className="w-3 h-3 bg-gray-700 rounded"></div>
                </div>

                {/* <!-- Editor --> */}
                <div className="px-4 py-3 font-mono text-xs text-white overflow-hidden">
                  <pre className="whitespace-pre-wrap leading-relaxed">
                    <code>
                      <span className="text-purple-400">import</span>{" "}
                      <span className="text-blue-400">React</span>{" "}
                      <span className="text-purple-400">from</span>{" "}
                      <span className="text-green-400">'react'</span>;{"\n\n"}
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-yellow-400">DevWorkspace</span> = ()
                      =&gt; {"{"}
                      {"\n  "}
                      <span className="text-purple-400">const</span> [
                      <span className="text-blue-400">isLoading</span>,{" "}
                      <span className="text-blue-400">setIsLoading</span>] ={" "}
                      <span className="text-yellow-400">React</span>.
                      <span className="text-blue-400">useState</span>(
                      <span className="text-orange-400">true</span>);
                      {"\n"}
                      <span className="text-yellow-400">React</span>.
                      <span className="text-blue-400">useEffect</span>() =&gt;{" "}
                      {"{"}
                      {"\n    "}
                      <span className="text-purple-400">const</span> timer{" "}
                      <span className="text-blue-400">setTimeout</span>(() =&gt;{" "}
                      {"{"}
                      {"\n      "}
                      <span className="text-blue-400">setIsLoading</span>(
                      <span className="text-orange-400">false</span>);
                      {"\n    "}
                      <span className="text-blue-400">, 2000</span>);
                      {"\n\n    "}
                      <span className="text-purple-400">return</span> () =&gt;{" "}
                      <span className="text-blue-400">clearTimeout</span>
                      (timer);
                      {"\n  "}, [];
                      {"\n\n  "}
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Sticky Notes --> */}
          <div className="absolute top-16 left-[90px] w-12 h-12 bg-yellow-200 rounded sticky-note rotate-[-15deg] z-30 xs:hidden lg:block">
            <div className="w-full h-full p-1">
              <div className="w-full text-center text-gray-800 font-bold text-[0.4rem] lg:text-[0.5rem]">
                TODO:
              </div>
              <div className="w-full text-center text-gray-800 text-[0.4rem] leading-tight">
                Fix navbar bug
              </div>
            </div>
          </div>

          {/* <!-- Coffee Cup --> */}
          <div className="absolute xs:bottom-16 xs:left-16  sm:bottom-2 sm:left-10 md:-bottom-2 md:left-8 left-10 w-12 h-16 animated fadeInUp delay100 z-20">
            <div className="absolute -right-4 top-6 h-8 w-8 border-4 border-gray-700 rounded-r-full"></div>
            <div className="absolute bottom-0 w-full h-10 bg-gray-700 rounded-b-lg"></div>
            <div className="absolute bottom-8 w-full h-8 bg-gray-600 rounded-lg">
              <div className="absolute inset-1 rounded-lg bg-gradient-to-b from-amber-700 to-amber-900"></div>
            </div>
            <div className="absolute w-6 h-1 bg-white/20 boalstehwqbj left-3 top-3"></div>
            {/* <!-- Steam Elements --> */}
            <div className="absolute w-1.5 h-4 bg-white bg-opacity-30 boalstehwqbj left-4 -top-2 steam steam1 rounded-xl"></div>
            <div className="absolute w-1.5 h-4 bg-white bg-opacity-30 boalstehwqbj left-6 -top-4 steam steam2 rounded-xl"></div>
            <div className="absolute w-1.5 h-4 bg-white bg-opacity-30 boalstehwqbj left-8 -top-3 steam steam3 rounded-xl"></div>
            <div className="absolute left-2 bottom-3 text-[8px] tracking-widest">
              COFFEE
            </div>
          </div>

          <div className="absolute top-32 left-[90px] w-12 h-12 bg-blue-200 rounded sticky-note max-sm:hidden rotate-[15deg] z-30 lg:block xs:hidden">
            <div className="w-full h-full p-1">
              <div className="w-full text-center text-gray-800 font-bold text-[0.4rem] lg:text-[0.5rem]">
                IDEA:
              </div>
              <div className="w-full text-center text-gray-800 text-[0.4rem] leading-tight">
                New portfolio
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
