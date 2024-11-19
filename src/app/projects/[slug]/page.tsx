"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import portfolios from "../../../../data/projects.json";
import Image from "next/image";

const ProjectPage = () => {
    const { slug } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null); // Explicitly set type

    if (!slug) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                Loading...
            </div>
        );
    }

    const project = portfolios.find((p) => p.slug === slug);

    if (!project) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <h1 className="text-3xl font-bold text-red-600">Project Not Found</h1>
            </div>
        );
    }

    const openModal = (image: string) => { // Explicitly set type for image
        setSelectedImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage(null);
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-black text-white p-8 mb-16">
            <div className="max-w-7xl mx-auto space-y-6">
                <h1 className="text-4xl font-bold text-white mb-8">{project.title}</h1>

                {/* First Row */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Description */}
                    <div className="bg-gray-950 border-[1px] border-orange-600 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                        <h2 className="text-xl font-semibold text-orange-400 mb-2">
                            Features
                        </h2>
                        <ul className="list-disc list-inside">
                            {project.features.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Technologies Used */}
                    <div className="bg-gray-950 border-[1px] border-orange-600 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                        <h2 className="text-xl font-semibold text-orange-400 mb-2">
                            Technologies Used
                        </h2>
                        <ul className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <li
                                    key={tech}
                                    className="text-xs bg-orange-600 text-white rounded px-3 py-1"
                                >
                                    {tech}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links */}
                    <div className="bg-gray-950 border-[1px] border-orange-600 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                        <h2 className="text-xl font-semibold text-orange-400 mb-2">
                            Links
                        </h2>
                        <div className="flex flex-row justify-around items-center">
                            <a
                                href={project.code}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col justify-center items-center text-blue-500 font-semibold"
                            >
                                <Image
                                    src={"/github.png"}
                                    width={48}
                                    height={48}
                                    alt="github"
                                />
                                View Codebase
                            </a>
                            {project.demo && (
                                <a
                                    href={project.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col justify-center items-center font-semibold text-blue-500"
                                >
                                    <Image
                                        src={"/globe.png"}
                                        width={48}
                                        height={48}
                                        alt="website"
                                    />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                {/* Second Row */}
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="lg:col-span-1 bg-gray-950 border-[1px] border-orange-600 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                        <h2 className="text-xl font-semibold text-orange-400 mb-2">
                            Description
                        </h2>
                        <p>{project.desc}</p>
                    </div>
                    {/* Gallery */}
                    <div className="lg:col-span-1 bg-gray-950 border-[1px] border-orange-600 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300">
                        <h2 className="text-xl font-semibold text-orange-400 mb-2">
                            Gallery
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {project.imageGallery.map((image, index) => (
                                <div
                                    key={index}
                                    className="relative md:w-60 h-32 group overflow-hidden rounded-lg flex justify-center items-center cursor-pointer"
                                    onClick={() => openModal(image)}
                                >
                                    <Image
                                        src={image}
                                        alt={`${project.title} image ${index + 1}`}
                                        layout="fill"
                                        objectFit="cover"
                                        className="transform group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Demo Video */}
                {project.videoId && (
                    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-300">
                        <iframe
                            width="100%"
                            height="700"
                            src={`https://www.youtube.com/embed/${project.videoId}`}
                            title="Demo Video"
                            frameBorder="0"
                            allowFullScreen
                            className="rounded-lg"
                        ></iframe>
                    </div>
                )}

                {/* Modal for Fullscreen Image */}
                {isModalOpen && (
                    selectedImage && <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-2 right-2 text-white text-2xl w-6 h-6 flex justify-center items-center bg-red-600 rounded-full"
                        >
                            &times;
                        </button>
                        <Image
                            src={selectedImage}
                            alt="Fullscreen Image"
                            width={800}
                            height={600}
                            className="rounded-lg"
                        />
                    </div>
                </div>
                )}
            </div>
        </div>
    );
};

export default ProjectPage;