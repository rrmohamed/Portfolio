
import { ArrowUp, Circle, Brain } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-10 bg-background text-foreground overflow-hidden">

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary blur-[160px]" />
      </div>

      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container px-6 mx-auto relative z-10">
      <div className="space-y-5 grid md:grid-cols-3 gap-12 relative">
        <div className="">
          <div className="mb-6 flex items-center space-x-2 cursor-pointer">
            <Brain className="text-primary hover:text-primary-foreground transition duration-300"/>
            <a className="text-2xl font-bold tracking-tight hover:text-primary transition duration-300" href="#">M.A</a>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-sm">
            Crafting fast, scalable and visually polished web experiences
            with modern frontend technologies.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mt-5">
            <Circle size={10} className="text-green-500 fill-green-500 animate-pulse" />
            Available for work
          </div>
        </div>

        {/* links */}
        <div className=" flex flex-col items-start md:items-center ">
          <h3 className="font-semibold mb-5">Quick Links</h3>
          <ul className="space-y-3 text-muted-foreground">
            {NavLinks.map((link , index) => (
              <li key={index}>
                <a href={link.href}  className="hover:text-primary transition duration-300 capitalize">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* social */}
        <div className=" flex flex-col items-start md:items-end " >
            <h3 className="font-semibold mb-5">Connect</h3>
          <div className="flex gap-4">
            {SocialIcons.map((social, i) => (
              <a  key={i}  href={social.link}  className="cursor-pointer group relative w-11 h-11 flex items-center justify-center rounded-xl border border-white/10 bg-white/5 hover:border-primary transition duration-500 overflow-hidden">
                <span className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-20 blur-xl transition" />
                <social.icon  size={18}  className="relative z-10 group-hover:text-primary transition duration-300"/>
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className=" mx-auto mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <p className="text-muted-foreground text-sm text-center md:text-left">
          © {new Date().getFullYear()} Mohamed — Built with passion & lots of ☕
        </p>
        {/* scroll to top */}
        <button  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className=" cursor-pointer group relative w-12 h-12 flex items-center justify-center rounded-full border border-primary/30 bg-primary/10 hover:bg-primary transition duration-500 overflow-hidden">
          <span className="absolute inset-0 bg-primary blur-xl opacity-0 group-hover:opacity-30 transition" />
          <ArrowUp className="relative z-10 group-hover:-translate-y-1 transition duration-300" />
        </button>
      </div>
      </div>

    </footer>
  );
}




























// import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import SocialIcons from './../../../data/SocialIcons';
import NavLinks from './../../../data/NavLinks';

// export default function Footer() {
//   return (
//     <footer className="relative bg-[#0b1215] pt-20 pb-10 px-6 text-white">

//       {/* top gradient line */}
//       <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />

//       <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12">

//         {/* logo + bio */}
//         <div>
//           <h2 className="text-2xl font-bold text-primary mb-4">
//             Mohamed.dev
//           </h2>

//           <p className="text-muted-foreground leading-relaxed">
//             Front-End Developer passionate about building modern, responsive
//             and user-friendly web experiences.
//           </p>
//         </div>

//         {/* links */}
//         <div>
//           <h3 className="font-semibold mb-4">Quick Links</h3>

//           <ul className="space-y-3 text-muted-foreground">
//             {["Home", "About", "Projects", "Contact"].map((link) => (
//               <li key={link}>
//                 <a
//                   href={`#${link.toLowerCase()}`}
//                   className="hover:text-primary transition"
//                 >
//                   {link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* social */}
//         <div>
//           <h3 className="font-semibold mb-4">Connect</h3>

//           <div className="flex gap-4">

//             <a
//               href="#"
//               className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition"
//             >
//               <Github size={18} />
//             </a>

//             <a
//               href="#"
//               className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition"
//             >
//               <Linkedin size={18} />
//             </a>

//             <a
//               href="#"
//               className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition"
//             >
//               <Twitter size={18} />
//             </a>

//           </div>
//         </div>
//       </div>

//       {/* bottom */}
//       <div className="max-w-6xl mx-auto mt-16 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">

//         <p className="text-muted-foreground text-sm text-center md:text-left">
//           © {new Date().getFullYear()} Mohamed. All rights reserved.
//         </p>

//         {/* scroll to top */}
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           className="group w-11 h-11 flex items-center justify-center rounded-full bg-primary/10 border border-primary/30 hover:bg-primary hover:text-background transition"
//         >
//           <ArrowUp size={18} className="group-hover:-translate-y-1 transition" />
//         </button>

//       </div>
//     </footer>
//   );
// }
