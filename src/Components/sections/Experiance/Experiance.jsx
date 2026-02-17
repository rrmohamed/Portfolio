import experiance from "../../../data/Experiance";

const Experiance = () => {
  return <>

  <section id="experiance" className="py-24 relative overflow-hidden">
    <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
    <div className="container px-6 mx-auto relative overflow-hidden">
      <div >
        <h5 className="text-sm text-secondary-foreground tracking-[0.3em] font-medium animate-fade-in uppercase">Career Journey</h5>
        <p className="my-6 text-3xl md:text-5xl text-primary font-bold animate-fade-in animation-delay-100">
          Experience that
          <span className="text-white italic font-serif font-normal"> speaks volumes.</span>
        </p>
        <div className="text-muted-foreground text-sm max-w-2xl animate-fade-in animation-delay-200">
          A timeline of my professional growth, from curious beginner to Junior engineer, building web interfaces with modern web technologies.
        </div>
      </div>

      <div className="relative">

        <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0  w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]"/>
        <div className="">
          {experiance.map((experiance , index)=>(
            <div key={index} className="mt-16 relative grid md:grid-cols-2 animate-fade-in " style={{ animationDelay: `${(index + 1) * 150}ms` }}>
              {/* dots */}
              <div className="absolute top-0 left-0 md:left-1/2 -translate-x-1/2 md:-translate-x-1/3 w-3 h-3 rounded-full bg-primary ring-4 ring-background ">
                {experiance.current&& (
                  <span className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"/>
                )}
              </div>
              {/* content */}
              <div className={`pl-8 md:pl-0 ${index % 2 === 0?"md:pr-16 md:text-right":"md:col-start-2 md:pl-16"} `}>
                <div className=" glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500">
                  <h5 className="text-sm text-primary mb-3">{experiance.period}</h5>
                  <h3 className="text-white text-lg font-bold ">{experiance.rol}</h3>
                  <h6 className="text-muted-foreground font-medium text-base mb-3">{experiance.company}</h6>
                  <p className="text-muted-foreground text-sm mb-4">{experiance.desc}</p>
                  <div className=" flex flex-wrap items-center gap-4">
                    {experiance.tech.map((tech , techIndx)=>(
                      <span className="px-2 py-1.5 bg-surface text-muted-foreground text-xs rounded-full" key={techIndx}> {tech} </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  </>
}

export default Experiance ;
