"use client";

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
    const [nav, setNav] = useState(false);
    const router = useRouter();
    const links = [
        { id: 1, link: "/" },
        { id: 2, link: "/education" },
        { id: 3, link: "/projects" },
        { id: 3, link: "/hackathons" },
        { id: 4, link: "/skills" },
        { id: 5, link: "/blogs" },
    ];
    const navigateTo = (path: string) => {
        router.push(path);
        setNav(false);
    };
    return (
        <div className="sticky top-0 flex justify-between items-center z-20 bg-black px-6 py-2">
            <div className="font-zain text-5xl sm:text-4xl text-yellow-200">
                <h1>samkit samsukha</h1>
            </div>
            <ul className="hidden md:flex text-xl md:justify-center md:items-center">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-yellow-200 duration-200"
                        onClick={() => navigateTo(link)}
                    >
                        {link === '/' ? 'Home' : link.slice(1)}
                    </li>
                ))}
            </ul>
            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-yellow-200 md:hidden"
            >
                {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>
            <div
                className={`fixed top-0 right-0 w-3/4 h-full bg-black transition-transform duration-300 ease-in-out transform ${
                    nav ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <ul className="flex flex-col justify-center items-center h-full">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-2 text-2xl hover:text-yellow-200 duration-200"
                            onClick={() => navigateTo(link)}
                        >
                            {link === '/' ? 'Home' : link.slice(1)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;