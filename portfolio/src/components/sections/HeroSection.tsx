import avatar from "@/../public/picture.jpg";
import githubIcon from "@/../public/github-mark.svg";
import linkedInIcon from "@/../public/linkedin.svg";
import React from "react";
import { Spotlight } from "../ui/Spotlight";
import Image from "next/image";
import { ShootingStars } from "../ui/ShootingStars";
import { StarsBackground } from "../ui/StarBackground";

const HeroSection = () => {
    return (
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
                        from the University of Melbourne with a strong focus on
                        frontend development.
                    </p>
                    <p className="text-gray-400  text-base font-medium text-center fade-in mt-2 ">
                        Passionate about creating engaging, user-friendly web
                        applications and always eager to learn and grow in the
                        tech industry.
                    </p>
                </div>
                <div className=" grid justify-center w-[50%] mx-auto mt-10 grid-cols-2 gap-5 ">
                    <button className="flex justify-center">
                        <Image className="filter hover:contrast-0" src={githubIcon} width={50} />
                    </button>
                    <button className="flex justify-center">
                        <Image className="filter contrast-75 hover:contrast-0" src={linkedInIcon} width={50} />
                    </button>
                    <button className="text-gray-400 ">download resume</button>
                    <button className="p-[3px] relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-teal to-green-600 rounded-lg" />
                        <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200  text-white hover:bg-transparent">
                            Check out my projects
                        </div>
                    </button>
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
    );
};

export default HeroSection;
