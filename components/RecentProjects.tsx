/* eslint-disable react/jsx-key */
"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
// import { SparklesCore } from "./ui/Sparkles";
import { projects } from "@/data";
import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { Cover } from "./ui/cover";

const RecentProjects = () => {
  return (
    <div id="projects" className="py-5">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-pri_green">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-20 gap-y-20 lg:gap-y-0 mt-20">
        {projects.map(({ index, title, des, img, iconLists, link }) => (
          <div
            key={index}
            className="h-[30rem] w-[80vw]  flex items-center justify-center sm:h-[41rem] sm:w-[570px] lg:min-h-[32.5rem] md:-mt-20 lg:-mt-20 "
            style={{ transform: "translateY(-10%)" }}
          >
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-pri_green dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[20rem] h-[28rem] sm:w-[30rem]  md:h-auto rounded-xl p-6 border  ">
                <CardItem
                  translateZ="50"
                  className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                  {title}
                </CardItem>
                <CardItem
                  as="p"
                  translateZ="60"
                  className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                  {des}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                  <Image
                    src={img}
                    height="830"
                    width="830"
                    className="h-60 w-full object-cover rounded-3xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                {iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center mt-20"
                  >
                    <CardItem
                      translateZ={20}
                      className="py-2 absolute left-0 -top-[3rem]  "
                    >
                      <img
                        src={icon}
                        alt="icon5"
                        height={10}
                        width={40}
                        className="p-2 "
                      />
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={link}
                      target="__blank"
                      className="px-4 py-2 rounded-xl absolute right-0 bottom-[0rem] bg-black text-pri_green text-xs font-bold"
                    >
                      <Cover >
                        Check it out <span className="animate-pulse">→</span>
                      </Cover>
                    </CardItem>
                  </div>
                ))}
              </CardBody>
            </CardContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
