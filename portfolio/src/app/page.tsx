import avatar from "@/../public/picture.jpg";
import githubIcon from "@/../public/github-mark.svg";
import linkedInIcon from "@/../public/linkedin.svg";
import React from "react";
import Image from "next/image";
import { ShootingStars } from "../components/ui/ShootingStars";
import { StarsBackground } from "../components/ui/StarBackground";
import Link from "next/link";

const HomePage = () => {
    return (
        <main>
            <div className="container relative z-0 mx-auto h-[90vh]">
                <div className="h-full w-full flex flex-col mx-auto">
                    <div className="inline-flex mx-auto mt-20 ">
                        <Image
                            className="rounded-lg fade-in"
                            src={avatar}
                            width={100}
                            height={100}
                            alt="placeholder avatar"
                        />
                    </div>
                    <div className="w-full mx-auto flex flex-col mt-5 max-w-lg">
                        <p className="sm:text-3xl text-xl font-medium text-white text-center fade-in">
                            Hi, I'm <span className="text-teal">Jack</span>
                            <span className="waving-hand">👋</span>
                        </p>
                        <p className="text-gray-400  text-base font-medium text-center fade-in mt-2 ">
                            I recently graduated as a{" "}
                            <span className="text-teal">Software Engineer</span>{" "}
                            from the University of Melbourne with a strong focus
                            on frontend development.
                        </p>
                        <p className="text-gray-400  text-base font-medium text-center fade-in mt-2 ">
                            Passionate about creating engaging, user-friendly
                            web applications and always eager to learn and grow
                            in the tech industry.
                        </p>
                    </div>
                    <div className=" grid w-[50%] mx-auto mt-10 grid-cols-2 gap-5 ">
                        <div className="flex justify-center">
                            <button className="hover:bg-gray-900 rounded-full transform hover:-translate-y-1 transition duration-400">
                                <a
                                    href="https://github.com/a779649182"
                                    target="_blank"
                                >
                                    <Image
                                        className="filter contrast-0"
                                        src={githubIcon}
                                        width={50}
                                        alt="github icon"
                                    />
                                </a>
                            </button>
                        </div>
                        <div className="flex justify-center">
                            <button className="hover:bg-gray-900 rounded-lg transform hover:-translate-y-1 transition duration-400 ">
                                <a
                                    href="https://www.linkedin.com/in/jackfu21/"
                                    target="_blank"
                                >
                                    <Image
                                        className="filter contrast-0"
                                        src={linkedInIcon}
                                        width={50}
                                        alt="linkedin icon"
                                    />
                                </a>
                            </button>
                        </div>
                        <div className="flex justify-center mt-5">
                            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                                <a
                                    className="inline-flex items-center"
                                    href={"/resume.pdf"}
                                    download={"resume"}
                                >
                                    <svg
                                        className="fill-current w-4 h-4 mr-2"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                                    </svg>
                                    <span>Download Resume</span>
                                </a>
                            </button>
                        </div>
                        <div className="flex justify-center mt-5">
                            <button className="p-[3px] relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-teal to-green-600 rounded-lg" />
                                <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200  text-white hover:bg-transparent">
                                    <Link href={"/projects"}>Check out my projects</Link>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <ShootingStars
                    maxSpeed={5}
                    maxDelay={5000}
                    starWidth={20}
                    starHeight={5}
                    className="-z-10"
                />
                <StarsBackground className="-z-10" />
            </div>
        </main>
    );
};

export default HomePage;
