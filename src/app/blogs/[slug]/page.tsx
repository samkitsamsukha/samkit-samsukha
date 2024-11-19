"use client"

import blogs from "../../../../data/blogs.json";
import Image from "next/image";
import { useParams } from "next/navigation"; // Import the useParams hook

// Define the type for the blog post
interface Blog {
	slug: string;
	title: string;
	createdAt: string;
	header: string;
	description: string;
	content: Array<{
		subheading: string;
		paragraph: string;
	}>;
}

const BlogPost = () => {
	const { slug } = useParams(); // Get the slug from the URL params

	// Find the blog post based on the slug
	const blog = blogs.find((b: Blog) => b.slug === slug);

	if (!blog) {
		return <div className="flex flex-1 min-h-screen">Blog not found.</div>;
	}

	return (
		<div className="flex flex-1 min-h-screen">
			<div className="flex flex-col items-center text-lg justify-center mx-auto w-[800px] my-12">
				<h1 className="text-2xl font-semibold bg-gradient-to-r from-orange-500 to-red-500 w-fit rounded-full px-4 py-2">
					{blog.title}
				</h1>
				<p className="text-sm text-gray-500 italic my-2">{blog.createdAt}</p>
				<Image
					src={blog.header}
					alt={blog.description}
					width={800}
					height={200}
					className="my-8"
				/>
				{blog.content.map((item) => (
					<div key={item.subheading}>
						<p className="text-xl bg-gray-800 py-2 px-4 w-fit rounded-xl my-1">
							{item.subheading}
						</p>
						<p className="my-1 p-2">{item.paragraph}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default BlogPost;
