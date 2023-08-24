import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlForImage } from "@/sanity/lib/image";


type Props = {
    experience: Experience;
};

function ExperienceCard({ experience }: Props) {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlForImage(experience.companyImage).url()}
                className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            />

            <div className="px-0 md:px-10 ">
                <h4 className="text-4xl font-light">{experience.jobTitle}</h4>
                <p className="font-bold text-1.8xl mt-1">{experience.company}</p>
                <div className="flex space-x-2 my-4 items-center">
                    {experience.technologies.map((technology) => (
                        // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
                        <img
                            key={technology._id}
                            className="h-10 w-10 rounded-full items-center"
                            src={urlForImage(technology.image).url()}
                        />
                    ))}
                </div>

                <p className="uppercase py-5 text-gray-300">
                    {new Date(experience.dateStarted).toDateString()} -{" "}
                    {experience.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(experience.dateEnded).toDateString()}
                </p>

                <ul className="list-disc space-y-4 ml-5 text-lg">
                    {experience.points.map((point, i) => (
                        <li key={i}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    );
}

export default ExperienceCard;