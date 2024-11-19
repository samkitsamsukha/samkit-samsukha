"use client";

import React from "react";
import Link from "next/link";
import blogs from "../../../data/blogs.json"; // Ensure this path is correct

const BlogsPage = () => {
	return (
		<div className="flex flex-col items-center min-h-screen bg-black">
			<div className="flex mx-auto w-fit rounded-full text-center px-4 py-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 font-bold text-2xl my-16">
				Blog Posts
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center sm:max-w-6xl max-w-3xl gap-6 px-4">
				{blogs.map((blog) => (
					<Link key={blog.id} href={`/blogs/${blog.slug}`}>
						<div className="relative bg-black text-white p-6 rounded-xl w-full transition-all duration-300 ease-in-out hover:scale-105 overflow-hidden border-[1px] border-orange-500 hover:bg-gray-950">
							{/* border-b-[1px] border-orange-500 w-fit */}
							{/* Text Content */}
							<div className="relative z-10 flex flex-col justify-center h-fit space-y-2">
								<h3 className="text-xl sm:text-2xl font-bold hover:text-orange-400 transition-colors duration-200">
									{blog.title}
								</h3>

								<p className="text-sm text-gray-300 line-clamp-2">
									{blog.description}
								</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default BlogsPage;
