"use client";
import React from "react";
import { Spotlight } from "./ui/Spotlight";



const HeroSection = () => {
    return (
        <div>
            <Spotlight
                className="-top-30 left-0 md:left-60 md:-top-20 h-screen"
                fill="white"
            />
            <section className="h-screen w-screen flex flex-col relative">
                <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20">
                    <p className="sm:text-3xl text-xl font-medium text-white text-center">
                        Hi, I'm <span className="text-teal">Jack</span> <span className="waving-hand">👋</span>
                    </p>
					<p className="text-gray-400 text-2xl font-medium text-center">Recent Graduate Software Engineer from Melbourne</p>
					<div>

					</div>
                </div>
            </section>
        </div>
    );
};

export default HeroSection;
