"use client";

import blogs from "../../../../data/blogs.json";
import Image from "next/image";
import { useParams } from "next/navigation";

interface Blog {
	slug: string;
	title: string;
	createdAt: string;
	header: string;
	width: number,
	height:number,
	description: string;
	content: Array<{
		subheading: string;
		paragraph: string;
	}>;
}

const BlogPost = () => {
	const { slug } = useParams();
	const blog = blogs.find((b: Blog) => b.slug === slug);

	if (!blog) {
		return (
			<div className="flex flex-1 min-h-screen justify-center items-center bg-black">
				<h1 className="text-xl font-semibold text-gray-300">Blog not found.</h1>
			</div>
		);
	}

	return (
		<div className="flex flex-col items-center bg-black min-h-screen px-4 py-8">
			<h1 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-full shadow-lg mb-4 text-center">
				{blog.title}
			</h1>
			<p className="text-sm text-gray-600 italic mb-6">{blog.createdAt}</p>
			<Image
				src={blog.header}
				alt={blog.description}
				width={blog.width}
				height={blog.height}
				className="rounded-xl shadow-lg max-w-full object-cover my-6"
				priority
			/>
			<div className="flex flex-col gap-6 w-full max-w-3xl">
				{blog.content.map((item, index) => (
					<div key={index} className=" rounded-lg p-4">
						<h2 className="text-lg font-semibold text-white bg-gray-900 py-1 px-4 rounded-md mb-2 shadow">
							{item.subheading}
						</h2>
						<p className="text-gray-100 leading-relaxed text-justify">
							{item.paragraph}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogPost;
