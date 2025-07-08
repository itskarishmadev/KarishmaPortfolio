import React from 'react'

const Intro = () => {
    return (
        <div>

            <div className="bg-[url('/pattern-code.png')] inset-0 opacity-[0.03] absolute" />
            <div className="w-full text-center space-y-6 xl:pt-8  p-6">
                <div className="space-y-2">
                    <h1
                        className="text-green-500 text-xl md:text-2xl font-semibold"
                        x-data="{ visible: false }"
                    >
                        Hello World! I'm
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
                <div className="flex flex-wrap justify-center gap-6 ">
                    <button className="py-3 px-5 bg-green-500 hover:bg-green-600 text-gray-900 font-bold rounded-lg transition-all flex gap-2 animated fadeInUp delay500"

                    >
                        {"</>"}&nbsp;&nbsp;View Projects
                    </button>
                    <button className="py-3 px-5 cursor-pointer border-green-600 border hover:bg-green-600 text-green-600 font-bold rounded-lg transition-all flex gap-2 animated fadeInUp delay500" >
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
                    <div className="absolute ajsklekajsnm -bottom-8 w-full h-40 border-2 border-gray-400 rounded-lg bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 neon-desk"></div>

                    {/* <!-- Monitor --> */}
                    <div className="absolute top-0 left-1/2 w-4/5 transform -translate-x-1/2 aspect-video bg-black rounded-lg border border-gray-600 shadow-lg flex ioajsklehsnm mb-24">
                        {/* <!-- Monitor Stand --> */}
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-1/2 h-4 bg-gray-700 rounded-b-sm"></div>

                        {/* <!-- Monitor Screen --> */}
                        <div className="flex-1 p-4 bg-gray-700 relative">
                            {/* <!-- Terminal Window --> */}
                            <div className="absolute inset-2 bg-black rounded border border-gray-700 flex ioajsklehsnm mklausjenrhtm">
                                <div className="bg-gray-800 p-1 flex layhetgsjdcb gap-1">
                                    <div className="flex gap-1 ml-1">
                                        <div className="w-2 h-2 bg-red-500 boalstehwqbj"></div>
                                        <div className="w-2 h-2 bg-yellow-500 boalstehwqbj"></div>
                                        <div className="w-2 h-2 bg-green-500 boalstehwqbj"></div>
                                    </div>
                                    <div className="text-[10px] sm:text-xs text-gray-400 mx-auto font-code">
                                        john@dev-workspace
                                    </div>
                                </div>
                                <div className="p-2 flex-1 font-code text-xs lg:text-sm">
                                    <pre className="text-green-500 mt-1 flex flex-col">          _____
                                        /     \    <span className="text-yellow-400">john@dev-workspace</span>
                                        | () () |   <span className="text-gray-400">------------------</span>
                                        \  ^  /    <span className="text-purple-400">OS:</span> <span data-typing="1" className="text-gray-300">DevOS v4.2.0</span>
                                        |||||     <span className="text-purple-400">Host:</span> <span data-typing="2" className="text-gray-300">ThinkPad X1 Carbon</span>
                                        |||||     <span className="text-purple-400">Kernel:</span> <span data-typing="3" className="text-gray-300">5.15.0-dev</span>
                                        <span className="text-purple-400">Uptime:</span> <span data-typing="4" className="text-gray-300">45 days, 17 hours</span>
                                        <span className="text-purple-400">Languages:</span> <span data-typing="5" className="text-gray-300">JavaScript, Python, Go</span>
                                        <span className="text-purple-400">Editor:</span> <span data-typing="6" className="text-gray-300">VSCode / Neovim</span>
                                        <span className="text-purple-400">Frameworks:</span> <span data-typing="7" className="text-gray-300">React, Next.js, TailwindCSS</span>
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Laptop --> */}
                    <div className="absolute bottom-2 right-8 w-2/5 aspect-video  animated fadeInRight delay300">
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
                                <div className="flex-1 p-1">
                                    <pre className="font-code text-[0.4rem] lg:text-[0.5rem] leading-tight">
                                        <span className="text-purple-400">import</span>{" "}
                                        <span className="text-blue-400">React</span>{" "}
                                        <span className="text-purple-400">from</span>{" "}
                                        <span className="text-green-400">'react'</span>;
                                        {/* <span className="text-purple-400">const</span> <span className="text-yellow-400">DevWorkspace</span> = () =&gt; {
  <span className="text-purple-400">const</span> [<span className="text-blue-400">isLoading</span>, <span className="text-blue-400">setIsLoading</span>] = <span className="text-yellow-400">React</span>.<span className="text-blue-400">useState</span>(<span className="text-orange-400">true</span>);
  
  <span className="text-purple-400">React</span>.<span className="text-blue-400">useEffect</span>(() =&gt; {
    <span className="text-purple-400">const</span> <span className="text-blue-400">timer</span> = <span className="text-blue-400">setTimeout</span>(() =&gt; {
      <span className="text-blue-400">setIsLoading</span>(<span className="text-orange-400">false</span>);
    }, <span className="text-orange-400">2000</span>);
    
    <span className="text-purple-400">return</span> () =&gt; <span className="text-blue-400">clearTimeout</span>(<span className="text-blue-400">timer</span>);
  }, []);
  
  <span className="text-purple-400">return</span> (
    &lt;<span className="text-blue-400">div</span> <span className="text-yellow-400">className</span>=<span className="text-green-400">"workspace"</span>&gt;
      {<span className="text-blue-400">isLoading</span> ? (
        &lt;<span className="text-blue-400">LoadingScreen</span> /&gt;
      ) : (
        &lt;<span className="text-blue-400">Projects</span> /&gt;
      )}
    &lt;/<span className="text-blue-400">div</span>&gt;
  );
}; */}
                                        <span className="text-purple-400">export</span>{" "}
                                        <span className="text-purple-400">default</span>{" "}
                                        <span className="text-yellow-400">DevWorkspace</span>;
                                    </pre>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Sticky Notes --> */}
                    <div className="absolute top-16 left-12 w-12 h-12 bg-yellow-200 rounded sticky-note rotate-[-15deg]">
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
                    <div className="absolute -bottom-4 md:-bottom-2 left-10 w-12 h-16 animated fadeInUp delay100">
                        <div className="absolute -right-4 top-6 h-8 w-8 border-4 border-gray-700 rounded-r-full"></div>
                        <div className="absolute bottom-0 w-full h-10 bg-gray-700 rounded-b-lg"></div>
                        <div className="absolute bottom-8 w-full h-8 bg-gray-600 rounded-lg">
                            <div className="absolute inset-1 rounded-lg bg-gradient-to-b from-amber-700 to-amber-900"></div>
                        </div>
                        <div className="absolute w-6 h-1 bg-white/20 boalstehwqbj left-3 top-3"></div>
                        {/* <!-- Steam Elements --> */}
                        <div className="absolute w-1.5 h-4 bg-white bg-opacity-30 boalstehwqbj left-4 -top-2 steam steam1"></div>
                        <div className="absolute w-1.5 h-4 bg-white bg-opacity-30 boalstehwqbj left-6 -top-4 steam steam2"></div>
                        <div className="absolute w-1.5 h-4 bg-white bg-opacity-30 boalstehwqbj left-8 -top-3 steam steam3"></div>
                        <div className="absolute left-2 bottom-3 text-[8px] tracking-widest">
                            COFFEE
                        </div>
                    </div>

                    <div className="absolute top-32 left-12 w-12 h-12 bg-blue-200 rounded sticky-note max-sm:hidden rotate-(10deg)">
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
    )
}

export default Intro