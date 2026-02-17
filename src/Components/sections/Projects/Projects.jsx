
import { ArrowUpRight, Github } from "lucide-react";
import projects from "../../../data/Projects";
import Button from "../../common/Button/Button";

const Projects = () => {
  return (
    <section id="projects" className="relative overflow-hidden py-28 ">

      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[140px]"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] rounded-full bg-highlight/10 blur-[140px]"></div>

      <div className="container px-6 mx-auto relative">

        <div className="text-center">
          <h5 className="text-sm text-secondary-foreground tracking-[0.3em] font-medium animate-fade-in">FEATURED WORK</h5>
          <p className="my-6 text-3xl md:text-5xl text-primary font-bold animate-fade-in animation-delay-100">
            Projects that
            <span className="text-white italic font-serif font-normal">  make the impact</span>
          </p>
          <div className="text-muted-foreground text-sm mx-auto max-w-2xl animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch relative mt-20">
          {projects.map((project, index) => (
            <div  key={index} className="group relative rounded-3xl overflow-hidden border border-border/40 bg-card/60 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 120}ms` }}>

              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-primary/10 via-transparent to-primary/20"></div>
              <div className="relative overflow-hidden aspect-video">
                <img  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"  src={project.image}  alt={project.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90"></div>

                <div className="absolute inset-0 flex justify-center items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a  href={project.link} target="_blank" className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-primary hover:scale-110 transition-all duration-300"  >
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                  <a href={project.github} target="_blank" className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-primary hover:scale-110 transition-all duration-300" >
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="px-6 py-6 space-y-4 min-h-[230px] flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center text-lg font-semibold tracking-wide">
                    <h3 className="group-hover:text-primary transition-colors duration-300"> {project.title} </h3>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{project.description}</p>
                </div>

                <div className="flex items-center flex-wrap gap-3 pt-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span  key={tagIndex}  className="shrink-0 bg-white/5 backdrop-blur-sm font-medium py-1.5 px-4 rounded-full text-xs text-muted-foreground hover:text-primary border border-white/10 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className=" mt-14 flex justify-center">
          <Button className="cursor-pointer :">
            <a href="https://github.com/rrmohamed?tab=repositories" target="_blank" className="flex items-center justify-center gap-3">
              View All Projects
              <ArrowUpRight className="h-5 w-5  " />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

