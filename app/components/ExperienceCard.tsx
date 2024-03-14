/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Experience } from "@/typings";
import { urlFor } from "@/sanity/lib/sanity";

type Props = {
  experiences: Experience;
};

function ExperienceCard({ experiences }: Props) {
  if (!experiences) return <div>Let me get that for you...</div>;
  return (
    <article className="flex flex-col rounded-l items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      {experiences?.companyImage && (
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
          src={urlFor(experiences?.companyImage).url()}
          alt={experiences?.company + " logo"}
        />
      )}

      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">{experiences?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{experiences?.company}</p>
        <div className="flex flex-wrap justify-start mx-2 my-2 ">
          {experiences.technologies.map((technology) => (
            <img
              key={technology._id}
              className="flex h-9 w-9"
              src={urlFor(technology.image).url()}
              alt={technology.title}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experiences.dateStarted).toDateString()} - {" "}
          {experiences.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experiences.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg max-h-80 w-4/5 overflow-y-scroll pr-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#468621]/80">
          {experiences.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
