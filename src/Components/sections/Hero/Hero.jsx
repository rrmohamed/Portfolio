
import { ArrowRight, ChevronDown, Download  } from "lucide-react";
import dots from "../../../utils/dots";
import hero_bg from "./../../../assets/images/hero-bg.jpg" ;
import personal_image from "./../../../assets/images/personale-photo.jpg"
import Button from './../../common/Button/Button';
import { AnimatedBorderButton } from "../../common/AnimatedBorderButton/AnimatedBorderButton";
import cv from "./../../../assets/mohamed abdelkareem-CV.pdf"
import SocialIcons from "../../../data/SocialIcons";
import Skills from './../../../data/Skills';


const Hero = () => {

  return <>
  <section id="hero"  className="relative overflow-hidden min-h-screen flex items-center">
    {/* start background of section */}
    {/* start bg image */}
    <div className="absolute inset-0">
      <img className="w-full h-full opacity-40 object-cover " src={hero_bg} alt="hero bg" />
    </div>
    {/* end bg image */}

    {/* start bg overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background"></div>
    {/* start bg overlay */}

    {/* start dots */}
    <div className=" absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i)=>(
        <div key={i} className="absolute w-1.5 h-1.5 bg-primary rounded-full"
        style={{ left:`${dots(100)}%` , top:`${dots(100)}%` ,
        animation :`slow-drift ${dots(20)}s ease-in-out infinite` ,
        animationDelay:`${dots(5)}s` }}
        />
      ))}
    </div>
    {/* end dots */}
  {/* end background of section */}ّّّّ

  {/* ---------------------------------------------section content--------------------------------------------- */}
  {/* hero content */}
  <div className="container mx-auto px-6 z-10 relative pt-28 pb-10">
    <div className=" grid lg:grid-cols-2 gap-12 items-center">
      {/* start left side */}
        <div className=" space-y-6">

          <div className="animate-fade-in inline-flex  items-center space-x-2 glass text-sm px-4 py-2 rounded-full">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"/>
            <p className="text-primary">Software Engineer . React Specialist</p>
          </div>
          <div className="space-y-3">
            <h1 className="animate-fade-in animation-delay-100 font-bold leading-tight text-4xl md:text-5xl lg:text-6xl">
               Crafting <span className="text-primary glow-text">digital</span>
              <br />
              experience with
              <br />
              <span className="font-serif italic font-normal text-white">precision</span>
            </h1>
            <p className="animate-fade-in animation-delay-200 text-base  lg:text-lg text-muted-foreground max-w-lg">
              Hi, I'm Mohamed Abdelkareem - a software engineer specializing in 
              React.js, Next.js, JavaScript and TypeScript. I build scalable, performant web
              applications that users love. 
            </p>
          </div>

          <div className="btns flex flex-wrap gap-4 items-center animate-fade-in animation-delay-300">
            <Button className="cursor-pointer" size="lg">Contact Me <ArrowRight className="w-5 h-5" /> </Button>
            
              <AnimatedBorderButton href={cv} >
                {/* <a href={cv} download className="flex items-center justify-center gap-2"> */}
                  <Download className="w-5 h-5" /> Download CV
                {/* </a> */}
              </AnimatedBorderButton>
          
          </div>

          <div className="social flex gap-4 items-center animate-fade-in animation-delay-400">
            <span className="text-sm text-muted-foreground">Follow Me :</span>
            <div className="social-icons flex gap-4">
              {SocialIcons.map((social , index)=>(
                <a className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300" key={index} href={social.href}>
                  {<social.icon className="w-5 h-5"/>}
                </a>
              ))}
            </div>
          </div>

        </div>
      {/* end left side */}

      {/* start right side */}
      <div className="relative animate-fade-in animation-delay-300">
        <div className="relative max-w-md mx-auto ">
          <div className=" absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/40 via-transparent to-primary/20 blur-2xl animate-pulse"/>
          <div className="relative glass rounded-3xl p-2 glow-border">
            <img src={personal_image} alt="personal image" className="w-full aspect-auto object-cover rounded-2xl" />
          </div>

          <div className="absolute top-[-10px] left-[-10px] glass rounded-xl p-1 md:p-2 animate-float animation-delay-500">
            <span className="font-bold text-primary text-xl md:text-2xl">2+</span>
            <p className="text-sm text-muted-foreground">Years Exp.</p>
          </div>

          <div className=" absolute bottom-[-10px] right-[-10px] inline-flex gap-3 items-center glass p-2 rounded-2xl animate-float">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-green-500"/>
            <p className="text-sm font-medium">Available For Work</p>
          </div>
        </div>
      </div>
      {/* end right side */}

    </div>
    {/* start skills side */}
    <div className=" text-center mt-5 animate-fade-in animation-delay-600">
      <p className="text-sm text-muted-foreground mb-2">Technologies I Work With</p>
      <div className="relative overflow-hidden">
        <div className=" flex animate-marquee">
          {[...Skills,...Skills].map((skill , i)=>(
            <div className="shrink-0 px-8 py-4"key={i}>
              <span className="text-lg font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    {/* end skills side */}

    <a href="#about" className="flex flex-col items-center mt-6 animate-fade-in animation-delay-700">
      <div className="text-xs text-muted-foreground" >SCROLL</div>
      <span className="mt-2">
        <ChevronDown className="h-6 w-6 animate-bounce cursor-pointer text-muted-foreground/50 hover:text-muted-foreground" />
      </span>
    </a>

  </div>
  </section>
  </>
}
export default Hero ;