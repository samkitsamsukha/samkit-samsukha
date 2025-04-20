"use client";

import Image from "next/image";
import { AnimatedTooltip } from "../components/AnimatedTooltip";
import portfolios from "../../data/projects.json";
import blogs from "../../data/blogs.json";
import Link from "next/link";

const sam = [
	{
		id: 1,
		name: "LeetCode",
		image: "/leetcode.png",
		link: "https://leetcode.com/u/samdoesdev/",
	},
	{
		id: 2,
		name: "GitHub",
		image: "/github.png",
		link: "https://github.com/samkitsamsukha",
	},
	{
		id: 3,
		name: "LinkedIn",
		image: "/linkedin.png",
		link: "https://www.linkedin.com/in/samkit-samsukha/",
	},
	{
		id: 4,
		name: "Codeforces",
		image: "/codeforces.png",
		link: "https://codeforces.com/profile/samkitsamsukha",
	},
	{
		id: 5,
		name: "CodeChef",
		image: "/codechef.png",
		link: "https://www.codechef.com/users/serenechaos",
	},
];

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col flex-1 justify-center items-center mb-16">
			<div className="flex flex-col md:flex-row md:mx-12 lg:mx-44 my-10 h-full items-center space-y-10 md:space-y-0">
				<div className="md:w-3/5 flex flex-col text-center md:text-left px-4 md:px-0">
					<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
						Hello, I am a <br />
						<span className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-red-500 via-orange-500">
							Full Stack Developer
						</span>
					</h1>
					<div className="py-4 text-base md:text-lg lg:text-xl">
						I am a proficient front-end developer and a coping backend
						developer. Currently, I am using the React and NextJS framework
						along with Tailwind CSS and I plan to further dive deep into Express
						and MongoDB to have a strong grip on my backend skills along with
						working on several projects.
					</div>
					<div className="flex justify-center md:justify-start">
						<a
							href="/RESUME.pdf"
							download
							className="mt-4 w-fit inline-block px-4 py-2 text-lg font-semibold text-white bg-gradient-to-r from-orange-600 to-red-600 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
						>
							Resume
						</a>
					</div>
				</div>
				<div className="md:w-2/5 flex justify-center items-center px-6">
					<div className="relative w-72 h-72 md:w-96 md:h-96 bg-gradient-to-tr from-orange-500 to-yellow-500 rounded-full shadow-lg glow-effect">
						<style jsx>{`
							.glow-effect {
								box-shadow: 0 0 10px rgba(255, 140, 0, 0.5),
									0 0 20px rgba(255, 165, 0, 0.3);
							}
						`}</style>
						<Image
							src="/heroImage.jpg"
							alt="Amoeboid Structure"
							layout="fill"
							objectFit="cover"
							className="p-1 rounded-full"
						/>
					</div>
				</div>
			</div>
			<div className="h-full flex flex-col justify-center items-center space-y-6">
				<div className="flex flex-wrap justify-center gap-4 p-4 mt-0 md:mt-6">
					<AnimatedTooltip items={sam} />
				</div>
			</div>
			{/* Recent Projects Section */}
			<div className="w-full max-w-7xl mt-20 px-6">
				<h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
					Recent Projects
				</h2>
				<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
					{portfolios.slice(0, 2).map((project) => (
						<Link
							href={`/projects/${project.slug}`}
							key={project.id}
							className="bg-black rounded-2xl shadow-lg p-5 border border-orange-500 hover:scale-[1.02] transition-all duration-300 flex flex-row gap-4"
						>
							<div className="w-1/3 relative rounded-xl overflow-hidden mb-4">
								<Image
									src={project.src}
									alt={project.title}
									fill
									className="object-cover w-64"
								/>
							</div>
							<div className="w-2/3 flex flex-col justify-center">
								<h3 className="text-xl font-semibold text-yellow-300 mb-2">
									{project.title}
								</h3>
								<p className="text-sm text-gray-100 mb-4 line-clamp-3">
									{project.desc}
								</p>
							</div>
						</Link>
					))}
				</div>
				<h2 className="text-3xl md:text-4xl font-bold text-center my-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
					Recent Blogs
				</h2>
				<div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
					{blogs.slice(0, 2).map((blog) => (
						<Link
							href={`/blogs/${blog.slug}`}
							key={blog.id}
							className="bg-black rounded-2xl shadow-lg p-5 border border-orange-500 hover:scale-[1.02] transition-all duration-300 flex flex-row gap-4"
						>
							<div className="flex flex-col justify-center">
								<h3 className="text-xl font-semibold text-yellow-300 mb-2">
									{blog.title}
								</h3>
								<p className="text-sm text-gray-100 mb-4 line-clamp-3">
									{blog.description}
								</p>
							</div>
						</Link>
					))}
					</div>
			</div>

		</div>
	);
}
