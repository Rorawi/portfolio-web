import React from "react";
import Navbar from "../components/Navbar";


const Hero = () => {
	return (
		<div className="h-[100vh] hero-section relative overflow-hidden">
			<Navbar />
			<div className="pb-16 px-10 lg:px-20 flex flex-col justify-center items-center h-full z-20 relative">
				<div className="md:max-w-5xl">
					<div>
						<p className="text-[40px] md:text-7xl  font-bold dark:text-white text-black text-center">
							{/* eslint-disable react/no-unescaped-entities */}
							I'm Winifred <span className="text-gradient"><br />A Frontend Developer</span>
							{/* eslint-disable react/no-unescaped-entities */}
						</p>
						<p className=" font-normal py-5 md:py-10 text-center text-white max-w-xl mx-auto">
                        I’m passionate about creating responsive and interactive web applications and apps.
						</p>
					</div>

				</div>
						
			</div>

		</div>
	);
};

export default Hero;