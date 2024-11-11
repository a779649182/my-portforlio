import avatar from "../../../public/picture.jpg";
import React from "react";
import { Spotlight } from "../ui/Spotlight";
import Image from "next/image";
import { ShootingStars } from "../ui/ShootingStars";
import { StarsBackground } from "../ui/StarBackground";



const HeroSection = () => {
	
    return (
        <div className="container">
            <Spotlight
                className="-top-30 left-0 md:left-60 md:-top-20 h-full"
                fill="white"
            />
			<ShootingStars maxSpeed={5} maxDelay={5000} starWidth={20} starHeight={5} />
			<StarsBackground />
            <section className="h-full w-screen flex flex-col relative mx-auto">
                <div className="w-full mx-auto flex flex-col mt-20 max-w-lg">
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
				<div className="inline-flex mx-auto ">
					<Image className="rounded-lg" src={avatar} width={100} height={100} alt="placeholder avatar" />
				</div>
            </section>

        </div>
    );
};

export default HeroSection;
