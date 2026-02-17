
import { about, highlights } from "../../../data/AboutHighlights";

const About = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden ">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-[450px] h-[450px] bg-primary/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-0 w-[450px] h-[450px] bg-highlight/10 rounded-full blur-[120px]"></div>

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Left Side */}
          <div className="space-y-10">
            
            <span className="text-primary text-sm font-medium tracking-[0.3em] uppercase inline-block animate-fade-in animation-delay-100">
              About Me
            </span>

            <h1 className="leading-tight text-3xl md:text-5xl font-bold animate-fade-in animation-delay-200">
              <span className="text-secondary-foreground">
                Building the future,
              </span>{" "}
              <span className="font-serif italic font-normal text-white">
                one <br /> component at a time.
              </span>
            </h1>

            <div className="space-y-5 animate-fade-in animation-delay-300">
              {about.map((item, indx) => (
                <p key={indx}  className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {item.me}
                </p>
              ))}
            </div>

            {/* Quote Box */}
            <div className="relative rounded-3xl p-8 border border-border/40 bg-card/60 backdrop-blur-xl shadow-xl animate-fade-in animation-delay-400">
              <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/10 via-transparent to-highlight/10"></div>

              <p className="italic text-base md:text-lg text-foreground/80 leading-relaxed relative z-10">
                "I enjoy transforming ideas into interactive, high-quality digital
                experiences — products that are not only functional, but
                thoughtfully designed and engineered to scale."
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="group relative rounded-3xl p-8 border border-border/40 bg-card/60 backdrop-blur-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 120}ms` }}>
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/10 via-transparent to-highlight/10"></div>

                <div className="relative z-10">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition duration-300 inline-block">
                    <highlight.icon className="text-primary h-5 w-5" />
                  </div>

                  <h3 className="mt-5 mb-3 text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                    {highlight.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;