import React, { useState } from "react";
import Image from "next/image";

interface TooltipItem {
	id: number;
	name: string;
	image: string;
	link: string; // Added link property
}

interface AnimatedTooltipProps {
	items: TooltipItem[];
}

export const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({ items }) => {
	const [hoveredItem, setHoveredItem] = useState<number | null>(null);

	const handleClick = (link: string) => {
		window.open(link, "_blank"); // Open link in a new tab
	};

	return (
		<div className="relative flex items-center">
			{items.map((item) => (
				<div
					key={item.id}
					className="relative mx-2 cursor-pointer"
					onMouseEnter={() => setHoveredItem(item.id)}
					onMouseLeave={() => setHoveredItem(null)}
					onClick={() => handleClick(item.link)} // Handle click to redirect
				>
					<Image
						src={item.image}
						alt={item.name}
						width={48}
						height={48}
						className="rounded-full hover:scale-110 duration-300 transition-all"
					/>
					{hoveredItem === item.id && (
						<div className="absolute bottom-full mb-2 w-32 p-2 text-center text-white bg-black rounded-lg shadow-lg transition-opacity duration-300 opacity-100">
							{item.name}
						</div>
					)}
				</div>
			))}
		</div>
	);
};
