import React from "react";
import Link from "next/link";
import Image from "next/image"; // Import the Image component from Next.js
import portfolios from "../../../data/projects.json";

const Projects = () => {
	return (
		<div className="flex flex-col items-center min-h-screen bg-black mb-16">
			<div className="flex mx-auto w-fit rounded-full text-center px-4 py-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 font-bold text-2xl my-16">
				Projects
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center sm:max-w-6xl max-w-3xl gap-6 px-4">
				{portfolios.map((portfolio) => (
					<Link key={portfolio.id} href={`/projects/${portfolio.slug}`}>
						<div className="relative bg-gradient-to-b from-orange-900 via-black to-black text-white p-6 rounded-xl w-full transition-all duration-300 ease-in-out hover:scale-105 overflow-hidden border-b-[2px] border-orange-900">
							{/* Image Component */}
							<div className="relative w-full h-48 sm:h-64 mb-4">
								<Image
									src={portfolio.src}
									alt={portfolio.title}
									layout="fill"
									objectFit="cover"
									className="rounded-t-xl"
								/>
							</div>

							{/* Text Content */}
							<div className="relative z-10 flex flex-col justify-center h-fit space-y-2">
								<h3 className="text-xl sm:text-2xl font-bold hover:text-orange-400 transition-colors duration-200">
									{portfolio.title}
								</h3>
								<p className="text-sm text-gray-300 line-clamp-2">
									{portfolio.desc}
								</p>
								<ul className="flex flex-wrap space-x-2">
									{portfolio.tech.map((tech) => (
										<li
											key={tech}
											className="text-xs bg-gradient-to-b from-orange-600 font-semibold to-red-600 rounded px-2 py-1"
										>
											{tech}
										</li>
									))}
								</ul>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default Projects;
