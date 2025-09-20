import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Award, Github, Globe, MapPin } from "lucide-react";



const Hackathons = () => {

    const hackathons = [
        {
            title: "HackFest",
            dates: "April 18th - 20th, 2025",
            location: "Finite Loop Club, NMAM Institute of Technology, Nitte",
            description:
                "A coding challenge using only HTML, CSS, and JavaScript. The problem statement involved developing an efficient college website.",
            image: "/hackathons/hackfest/logo.png",
            photo: "/hackathons/hackfest/photo.png",
            links: [
                {
                    icon: <Github className="size-4" />,
                    title: "Code",
                    href: "https://github.com/samkitsamsukha/hf-csr-kive",
                },
            ],
        },
        {
            title: "Tech Tank",
            dates: "April 7th - 8th, 2025",
            location: "ACM, RV College of Engineering, Bengaluru",
            description:
                "A coding challenge using only HTML, CSS, and JavaScript. The problem statement involved developing an efficient college website.",
            image: "/hackathons/techtank/logo.png",
            photo: "/hackathons/techtank/photo.png",
            links: [
                {
                    icon: <Github className="size-4" />,
                    title: "Code",
                    href: "https://github.com/samkitsamsukha/csr-kive",
                }
            ],
        },
        {
            title: "RoTech",
            dates: "April 5th, 2025",
            location: "Rotaract BMSCE, Bengaluru",
            description:
                "Developed a web app for hiring managers and employees called Smart Match, which helps match the right candidate to the right job.",
            image: "/hackathons/rotech/logo.png",
            photo: "/hackathons/rotech/photo.png",
            links: [
                {
                    icon: <Github className="size-4" />,
                    title: "Source",
                    href: "https://github.com/samkitsamsukha/smart-match",
                },
                {
                    icon: <Award size={15} />,
                    title: "Third",
                    href: "/",
                },
            ],
        },
        {
            title: "CodeCraze",
            dates: "December 20th, 2024",
            location: "MVJ College of Engineering, Bengaluru",
            description:
                "A coding challenge using only HTML, CSS, and JavaScript. The problem statement involved developing an efficient college website.",
            image: "/hackathons/codecraze/logo.png",
            photo: "/hackathons/codecraze/photo.png",
            links: [
                
                {
                    icon: <Award size={15} />,
                    title: "3rd",
                    href: "",
                },
            ],
        },
        {
            title: "Hackaphasia",
            dates: "December 4th - 5th, 2024",
            location: "B.M.S. College of Engineering, Bengaluru",
            description:
                "Developed a machine learning-based web app focusing on the Sustainable Development Goal XX.",
            image: "/hackathons/hackaphasia/logo.png",
            photo: "/hackathons/hackaphasia/photo.png",
            links: [
                {
                    icon: <Globe className="size-4" />,
                    title: "Live",
                    href: "https://krushi-ai.vercel.app",
                },
                {
                    icon: <Github className="size-4" />,
                    title: "Code",
                    href: "https://github.com/samkitsamsukha/krushi-ai",
                },
                {
                    icon: <Award className="size-4" />,
                    title: "Top 5",
                    href: "",
                },
            ],
        },
        {
            title: "Quant-a-maze",
            dates: "November 14th - 16th, 2024",
            location: "Nitte Meenakshi Institute of Technology, Bengaluru",
            description:
                "Developed a Web3 and blockchain-based healthcare platform to enhance patient record management, using IPFS for secure file sharing and Solidity for smart contracts.",
            image: "/hackathons/quantamaze/logo.png",
            photo: "/hackathons/quantamaze/photo.png",
            links: [
                {
                    icon: <Github className="size-4" />,
                    title: "Source",
                    href: "https://github.com/samkitsamsukha/vitalis",
                },
            ],
        },
    ];


    return (
        <div className="flex flex-col items-center min-h-screen bg-black mb-16">
            <div className="flex mx-auto w-fit rounded-full text-center px-4 py-2 bg-gradient-to-r from-yellow-600 via-orange-500 to-red-500 font-bold text-2xl my-16">
                Hackathons
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center sm:max-w-6xl max-w-3xl gap-6 px-4">
                {hackathons.map((hackathon, index) => (
                    <div key={index} className="relative bg-black text-white p-6 rounded-xl w-full transition-all duration-300 ease-in-out hover:scale-105 overflow-hidden border-b-[2px] border-t-[2px] border-r-[1px] border-l-[1px] border-orange-900">
                        <div className="flex flex-row items-center gap-4">
                            <div className="border m-auto rounded-full w-16 h-16">
                                <Image src={hackathon.image} alt={hackathon.title} width={64} height={64} className="object-cover rounded-full" />
                            </div>
                            <div className="flex flex-1 flex-col justify-start gap-1">
                                {hackathon.dates && (
                                    <time className="text-xs text-muted-foreground">{hackathon.dates}</time>
                                )}
                                <h2 className="font-semibold leading-none text-xl">{hackathon.title}</h2>
                            </div>
                        </div>
                        {hackathon.location && (
                            <div className="flex flex-row items-center my-1 gap-1 text-orange-400">
                                <MapPin className="w-4" />
                                <p className="text-sm">{hackathon.location}</p>
                            </div>
                        )}
                        {
                            hackathon.photo && (
                                <div className="w-full h-64 rounded-xl overflow-hidden">
                                    <Image
                                        src={hackathon.photo}
                                        alt={hackathon.title}
                                        width={500}
                                        height={256}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                            )
                        }
                        {hackathon.description && (
                            <span className="prose dark:prose-invert text-sm text-muted-foreground">
                                {hackathon.description}
                            </span>
                        )}
                        {hackathon.links && hackathon.links.length > 0 && (
                            <div className="mt-2 flex flex-row flex-wrap items-start gap-2">
                                {hackathon.links?.map((link, idx) => (
                                    <Link href={link.href} key={idx}>
                                        <div key={idx} title={link.title} className="flex gap-2 bg-white text-black rounded-md text-sm justify-center items-center px-2 py-1">
                                            {link.icon}
                                            {link.title}
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Hackathons;
