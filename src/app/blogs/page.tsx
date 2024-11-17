// src/app/blogs/page.tsx
import Link from "next/link";
import blogs from "../../../data/blogs.json";

const BlogsPage = () => {
	return (
		<div className="flex flex-1  min-h-screen">
		  <div>
				<h1>Blog Posts</h1>
				<ul>
					{blogs.map((blog) => (
						<li key={blog.id}>
							<Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
							<p>{blog.description}</p>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default BlogsPage;
