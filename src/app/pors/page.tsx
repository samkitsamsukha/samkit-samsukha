import React from "react";
import Image from "next/image";

const pors = [
    {
        id: 1,
        org: "Coding Club of RVCE",
        roles: [
            {
                title: "",
                period: "October 2025 - Present",
                img: "/pors/codingclub.png",
            },
            {
                title: "Teaching Assistant",
                period: "March 2025 - May 2025",
                img: "/pors/codingclub.png",
            },
        ],
    },
    {
        id: 2,
        org: "IEEE Computer Society RVCE",
        roles: [
            {
                title: "Chair",
                period: "Jan 2025 - Present",
                img: "/pors/ieee.png",
            },
        ],
    },
    {
        id: 3,
        org: "Rotaract Club of RVCE",
        roles: [
            {
                title: "Joint Secretary",
                period: "July 2025 - Present",
                img: "/pors/rotaract.png",
            },
            {
                title: "Organiser",
                period: "Dec 2024 - June 2025",
                img: "/pors/rotaract.png",
            },
            {
                title: "Club Representative",
                period: "Aug 2024 - Dec 2024",
                img: "/pors/rotaract.png",
            },
        ],
    },
    {
        id: 7,
        org: "8th Mile",
        roles: [
            {
                title: "Lead Frontend Developer",
                period: "April 2025 - May 2025",
                img: "/pors/8thmile.png",
            },
        ],
    },
    {
        id: 4,
        org: "Sri Sri Academy",
        roles: [
            {
                title: "Head Boy",
                period: "July 2022 - June 2023",
                img: "/pors/ssa.png",
            },
        ],
    },
    {
        id: 5,
        org: "Interact Club of Sri Sri Academy",
        roles: [
            {
                title: "Secretary",
                period: "July 2022 - June 2023",
                img: "/pors/interact.png",
            },
            {
                title: "Public Relations Officer",
                period: "July 2021 - June 2022",
                img: "/pors/interact.png",
            },
            {
                title: "Director",
                period: "July 2020 - June 2021",
                img: "/pors/interact.png",
            },
        ],
    },
];

const PORs = () => {
    return (
        <div className="relative flex flex-col items-center min-h-screen bg-black mb-16 px-4 overflow-hidden">
            {/* Futuristic BG */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,165,0,0.15),transparent_70%)]"></div>
            <div className="absolute inset-0 bg-grid-orange-500/[0.05]"></div>

            {/* Heading */}
            <div className="flex mx-auto w-fit rounded-full text-center px-4 py-2 bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 font-bold text-2xl mt-16 mb-8">
				Positions of Responsibility
			</div>

            {/* Vertical Timeline */}
            <div className="relative w-full max-w-4xl">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-yellow-500 via-orange-500 to-red-600 rounded-full"></div>

                <div className="flex flex-col space-y-12 ml-16">
                    {pors.map((org) => (
                        <div
                            key={org.id}
                            className="relative bg-black backdrop-blur-xl rounded-2xl p-6 shadow-[0_0_20px_rgba(255,100,0,0.35)] border border-orange-800/40 hover:shadow-[0_0_35px_rgba(255,140,0,0.7)] transition-all duration-500"
                        >
                            {/* Dot on timeline */}
                            <div className="absolute -left-11 top-8 w-6 h-6 rounded-full bg-gradient-to-r from-yellow-400 to-red-500 border-2 border-orange-700"></div>

                            {/* Org */}
                            <h3 className="text-2xl font-bold text-orange-300 mb-6 tracking-wide">
                                {org.org}
                            </h3>

                            {/* Roles */}
                            <div className="space-y-4">
                                {org.roles.map((role, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-4 group"
                                    >
                                        <div className="relative w-16 h-16 overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                            <Image
                                                src={role.img}
                                                alt={role.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-lg font-semibold text-orange-400 group-hover:text-yellow-300 transition-colors duration-300">
                                                {role.title}
                                            </p>
                                            <p className="text-sm text-gray-300">{role.period}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PORs;
