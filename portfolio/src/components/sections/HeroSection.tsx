import avatar from "../../../public/picture.jpg";
import React from "react";
import { Spotlight } from "../ui/Spotlight";
import Image from "next/image";
import { ShootingStars } from "../ui/ShootingStars";
import { StarsBackground } from "../ui/StarBackground";

const HeroSection = () => {
    return (
        <div className="container relative z-0 mx-auto h-[90vh]">
            <section className="h-full w-full flex flex-col mx-auto">
                <div className="inline-flex mx-auto mt-10 ">
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
                <button className="text-gray-400">github</button>
                <button className="text-gray-400">linkedin</button>
                <button className="text-gray-400">download resume</button>
                <button className="text-gray-400">download resume</button>
            </section>

            <Spotlight
                className="-top-30 left-0 md:left-60 md:-top-20 h-full"
                fill="white"
            />

                <ShootingStars
                    maxSpeed={5}
                    maxDelay={5000}
                    starWidth={20}
                    starHeight={5}
                />
                <StarsBackground />

        </div>
    );
};

export default HeroSection;
