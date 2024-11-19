import React from "react";
import Image from "next/image";
import html from "../../../public/html.png";
import css from "../../../public/css.png";
import bootstrap from "../../../public/bootstrap.png";
import javascript from "../../../public/javascript.png";
import reactImage from "../../../public/react.png";
import github from "../../../public/github.png";
import git from "../../../public/git.png";
import tailwind from "../../../public/tailwind.png";
import cpp from "../../../public/cpp.png";
import nodejs from "../../../public/nodejs.png";
import java from "../../../public/java.png";
import c from "../../../public/c.png";
import typescript from "../../../public/typescript.png";
import nextjsdm from "../../../public/nextjsdm.png";
import expressdm from "../../../public/expressdm.png";
import mongodb from "../../../public/mongodb.png";

const techs = [
    { id: 1, src: html, title: "HTML", style: "shadow-orange-500 bg-black" },
    { id: 2, src: css, title: "CSS", style: "shadow-blue-500 bg-black" },
    { id: 3, src: javascript, title: "JavaScript", style: "shadow-yellow-500 bg-black" },
    { id: 4, src: reactImage, title: "React", style: "shadow-blue-600 bg-black" },
    { id: 5, src: nodejs, title: "Node JS", style: "shadow-green-600 bg-black" },
    { id: 6, src: tailwind, title: "Tailwind CSS", style: "shadow-sky-500 bg-black" },
    { id: 7, src: bootstrap, title: "Bootstrap", style: "shadow-indigo-600 bg-black" },
    { id: 8, src: cpp, title: "C++", style: "shadow-blue-500 bg-black" },
    { id: 9, src: java, title: "Java", style: "shadow-blue-900 bg-black" },
    { id: 10, src: c, title: "C", style: "shadow-indigo-900 bg-black" },
    { id: 11, src: github, title: "GitHub", style: "shadow-gray-700 bg-black" },
    { id: 12, src: git, title: "Git", style: "shadow-orange-800 bg-black" },
    { id: 13, src: typescript, title: "TypeScript", style: "shadow-blue-700 bg-black" },
    { id: 14, src: nextjsdm, title: "Next Js", style: "shadow-gray-400 bg-black" },
    { id: 15, src: expressdm, title: "Express Js", style: "shadow-gray-700 bg-black" },
    { id: 16, src: mongodb, title: "MongoDB", style: "shadow-green-500 bg-black" },
];

const Page = () => {
    return (
        <div className="flex flex-col flex-1 items-center min-h-screen bg-black-50">
            <div className="flex justify-center items-center w-fit rounded-full text-center px-4 py-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 font-bold text-2xl my-16">
                Skills & Technologies
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
                {techs.map(({ id, src, title, style }) => (
                    <div
                        key={id}
                        className={`flex flex-col justify-center items-center p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 ${style}`}
                    >
                        <Image
                            src={src}
                            alt={title}
                            width={80}
                            height={80}
                            className="w-20 h-20 object-contain mb-2"
                        />
                        <p className="text-sm font-semibold text-center">{title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Page;
