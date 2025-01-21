import { FaArrowDown, FaArrowRight, FaLocationArrow } from "react-icons/fa";
// import Magicbutton from "./ui/Magicbutton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton1 from "./ui/MagicButton1";
import Link from "next/link";
import { TypewriterEffect } from "./ui/TypewriterEffect";
import Magicbutton from "./ui/Magicbutton";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 -mt-28 md:-mt-0">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="lightgreen"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="limegreen"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="green" />
      </div>
      {/* grid */}
      <div
        className="w-full dark:bg-black bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // change the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>
      {/* head wrapper */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Breaching the Perimeter
          </p>
          <TextGenerateEffect
            className="text-center text-[35px] md:text=3xl lg:text-5xl"
            words="A Pentester Dedicated to Exposing Vulnerabilities"
          />

          {/* <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi, I&apos;m ShadowCrypter, a Web-Pentester | Malware Developer
            based in India.
          </p> */}

          {/* type writter effect */}
          <TypewriterEffect
            words={[
              { text: "Hello, " },
              { text: "I' ", className: "text-green" },
              { text: "m  ", className: "text-green" },
              { text: "Nittin ", className: "text-green" },
              { text: "a " },
              { text: "Web-Pentester " },
              { text: " | " },
              { text: "Malware Developer " },
              { text: "based  " },
              { text: "in   " },
              { text: "India. " },
            ]}
          />

          {/* contact-CV section */}
          <div className="flex flex-col sm:flex-row mt-4 justify-center gap-4 ">
            <Link href="#contact">
              <MagicButton1
                title="Contact me here"
                icon={<FaArrowRight />}
                position={"right"}
              />
            </Link>
            <a href="/">
              <MagicButton1
                title="Download CV"
                icon={<FaArrowDown />}
                position={"right"}
              />
            </a>
          </div>
          {/* show my works sections */}
          <a className="mt-7 md:-mt-3" href="#projects">
            <Magicbutton
              title="See my projects"
              icon={<FaLocationArrow />}
              position={"right"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
