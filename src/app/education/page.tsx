"use client";
import React from "react";

const edu = [
    {
        id: 1,
        school: "R.V. College of Engineering",
        location: "Bengaluru, India",
        grade: "Bachelor of Engineering in Information Science",
        result: "9.53 (as of 2nd semester)",
        image: "/rvce.jpg", // Updated path
    },
	{
        id: 2,
		school: "Sri Sri Academy",
		location: "Kolkata, India",
		grade: "ISC - Class XII (Science PCM + CS)",
		result: "94.25%",
		image: "/srisriacademy.jpg", // Updated path
	},
    {
        id: 3,
        school: "Sri Sri Academy",
        location: "Kolkata, India",
        grade: "ICSE - Class X (Science PCMB)",
        result: "97.6%",
        image: "/srisriacademy.jpg", // Updated path
    },
];

const EducationPage = () => {
	return (
		<div className="flex flex-col items-center min-h-screen bg-black mt-16"> {/* Added mt-16 to account for the Navbar height */}
			{/* Title */}
			<div className="flex mx-auto w-fit rounded-full text-center px-4 py-2 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 font-bold text-2xl mt-16 mb-8">
				My Education
			</div>

			{/* Education Cards */}
			<div className="flex flex-col justify-center items-center sm:w-full max-w-3xl space-y-6 px-4">
				{edu.map(({ id, school, location, grade, result, image }) => (
					<div
						key={id}
						className="relative bg-black text-white p-6 rounded-xl w-full sm:h-[250px] transition-all duration-300 ease-in-out hover:scale-110 overflow-hidden group glow-effect"
					>
						{/* Glow Effect */}
						<style jsx>{`
							.glow-effect {
								box-shadow: 0 0 10px rgba(255, 140, 0, 0.5),
									0 0 10px rgba(255, 165, 0, 0.3);
							}
							.glow-effect:hover {
								box-shadow: 0 0 15px rgba(255, 140, 0, 0.8),
									0 0 10px rgba(255, 165, 0, 0.4);
							}
						`}</style>
						<div
							className="absolute inset-0 bg-cover bg-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
							style={{ backgroundImage: `url(${image})` }}
						></div>

						{/* Overlay for Text Readability */}
						<div className="absolute inset-0 bg-black bg-opacity-70 group-hover:bg-opacity- transition-opacity duration-500"></div>

						{/* Text Content */}
						<div className="relative z-10 p-4 flex flex-col justify-center h-fit sm:h-full space-y-2">
							<h3 className="text-xl sm:text-2xl font-bold">{school}</h3>
							<p className="text-sm text-gray-300">{location}</p>
							<p className="text-orange-400">{grade}</p>
							<p className="text-lg font-semibold">{result}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default EducationPage;