"use client"

import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const links = [
		{
			id: 1,
			link: "home",
		},
		{
			id: 2,
			link: "education",
		},
		{
			id: 3,
			link: "projects",
		},
		{
			id: 4,
			link: "skills",
		},
		{
			id: 5,
			link: "blogs",
		},
	];

	return (
		<div
			className={`flex justify-between items-center z-10 bg-black px-6 py-2`}
		>
			<div className="font-zain text-5xl sm:text-4xl  text-yellow-200">
				<h1
				>
					samkit samsukha
				</h1>
			</div>

			<ul className="hidden md:flex text-xl md:justify-center md:items-center">
				{links.map(({ id, link }) => (
					<li
						key={id}
						className={`px-4 cursor-pointer capitalize font-medium hover:scale-105 hover:text-yellow-200 duration-200`}
					>
                        {
                            link === 'home' ? <Link href={'/'}>
							Home
						</Link> : <Link href={`/${link}`}>
							{link}
						</Link>
                        }
					</li>
				))}
			</ul>

			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-10 text-yellow-200 md:hidden"
			>
				{nav ? <FaTimes size={20} /> : <FaBars size={20} />}
			</div>

			{nav && (
				<ul
					className={`flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black`}
				>
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-2 text-2xl"
						>
							<Link
								onClick={() => setNav(!nav)}
								href={`/${link}`}
							>
								{link}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default Navbar;
