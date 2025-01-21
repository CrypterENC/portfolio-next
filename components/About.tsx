import React from "react";
import { FlipWords } from "./ui/FlipWords";

const About = () => {
  return (
    <div className="flex justify-center">
      <section
        id="about"
        className="-mt-20 md:-mt-20 mb-20 max-w-[45rem] text-center leading-8 sm:mb-35"
      >
        <h2 className="text-4xl font-semibold uppercase mb-8">About Me</h2>
        <div className="mb-3 text-xl">
          As a seasoned{" "}
          <span className="font-semibold text-pri_green">Pentester</span>,I am
          dedicated to safeguarding organizations from cyber threats by
          proactively identifying and exploiting vulnerabilities. With a strong
          foundation in computer science and a passion for cybersecurity, I have
          developed a deep understanding of network infrastructure, systems
          security, and ethical hacking techniques. My expertise lies in{" "}
          <span className="font-semibold">
            <FlipWords
              words={[
                "Web Application Testing",
                "Network Penetration Testing",
                "Social Engineering.",
              ]}
            />
          </span>{" "}
        </div>
        <div className="text-xl">
          {" "}
          I am proficient in using{" "}
          <span className="font-semibold">
            <FlipWords
              words={[
                "Kali Linux",
                "Metasploit",
                "FFUF",
                "Burp-Suite",
                "Nessus.",
              ]}
            />
          </span>
          My goal is to provide actionable insights and recommendations that
          help organizations strengthen their security posture and mitigate
          risks. I am a collaborative team player who enjoys working with
          clients to understand their unique needs and challenges. I am
          confident that my skills and experience make me a valuable asset to
          any cybersecurity team.
        </div>
      </section>
    </div>
  );
};

export default About;
