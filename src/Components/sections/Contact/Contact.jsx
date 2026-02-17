import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import Button from "../../common/Button/Button";
import contactInfo from "../../../data/contact";
import toast from "react-hot-toast";
import { ClipLoader } from "react-spinners";

export default function Contact() {

  const form = useRef();
  const[isLoading , setIsLoading] = useState(false) ;

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true) ;

    emailjs.sendForm(
      "service_0mni9rq",
      "template_hxf10hg",
      form.current,
      "dvZVNoWD-RPJHC1iE"
    )
    .then(() => {
        setIsLoading(false) ;
        toast.success("Message sent successfully ");
        form.current.reset();
      },
      () => {
        setIsLoading(false) ;
        toast.error("Something went wrong ");
      }
    );
  };

  return (
    <section id="contact" className="relative overflow-hidden py-28 ">
      <div className="container px-6 md:px-14 lg:px-16 mx-auto relative">

        <form ref={form} onSubmit={sendEmail} className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">

          {/* left side */}
          <div className=" rounded-3xl border border-primary/30 glass p-8 backdrop-blur-xl animate-fade-in animation-delay-300">
            <div className="space-y-5">

              <div>
                <label className="text-sm text-gray-400">Name</label>
                <input type="text" name="name" placeholder="Your name..." className="w-full mt-2 glass-strong border-2 border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition duration-300" required  />
              </div>

              <div>
                <label className="text-sm text-gray-400">Email</label>
                <input type="email" name="email" placeholder="your@email.com" className="w-full mt-2 glass-strong border-2 border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition duration-300" required  />
              </div>

              <div>
                <label className="text-sm text-gray-400">Message</label>
                <textarea name="message" rows="4" placeholder="Your message..." className="w-full mt-2 glass-strong border-2 border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary transition duration-300" required/>
              </div>

              <Button type="submit" size="lg" className="w-full cursor-pointer">
                {isLoading === true ? <>
                  <ClipLoader color="white"
                  size={20}/>
                  </> : <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>}
              </Button>

            </div>
          </div>

          {/* right side  */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="rounded-3xl glass p-4 md:p-8 ">
              <h3 className="text-lg md:text-xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-3 md:space-y-6 text-foreground">
                {contactInfo.map((contact , index)=>(
                  <a href={contact.href} key={index} className=" flex items-center gap-4 rounded-xl p-4 hover:bg-muted transition duration-300">
                    <div className=" flex items-center">
                      <div className="w-11 h-11 flex items-center justify-center rounded-xl glass text-primary">
                        <contact.icon />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center min-w-0">
                      <p className="text-sm text-muted-foreground"> {contact.label} </p>
                      <p className="text-sm break-words md:text-base text-foreground"> {contact.value} </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-muted/20 glass p-8 backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-3 h-3 bg-green-400 rounded-full"></span>
                <p className="font-medium">Currently Available</p>
              </div>

              <p className="text-gray-400">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let’s talk!
              </p>
            </div>
          </div>

        </form>
      </div>
    </section>
  );
}

