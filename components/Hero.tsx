import React from "react";
import Navbar from "../components/Navbar";
import bgpattern from "../components/images/bgpattern.avif";
import profileImg from "../components/images/profile.jpg";
import profileImg2 from "../components/images/Wini2.jpg";
import { HiOutlineDownload } from "react-icons/hi";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
	return (
		<div className="h-[100vh] relative overflow-hidden">
			<Navbar />

			<div className="pb-16 px-5 md:px-20 flex flex-col justify-center items-center h-full z-20 relative">
				<div className="md:max-w-xl text-center">
					<div className="flex justify-center mb-8">
						<div className="w-24 h-24 rounded-full overflow-hidden pb-4">
							<Image
								src={profileImg2}
								alt="Profile Image"
								layout="responsive"
								width={80}
								height={80}
								objectFit="cover"
								className="grayscale-100"
							/>
						</div>
					</div>
					<h6 className="mb-5">Hi! I’m Winifred ✌🏻 </h6>
					<div>
						<p className="text-[30px] md:text-5xl font-medium text-center mb-2">
							Frontend Developer
						</p>
						<p className="text-center text-secondary">
							{" "}
							I specialize in crafting engaging user experiences and beautiful, responsive interfaces, with a strong focus on user-centered design and seamless interactivity.
						</p>

						<div className="mt-6 flex flex-col md:flex-row justify-center space-x-4">
							<button className="px-5 py-2 bg-black rounded-full text-white cursor-pointer mb-2 md:mb-0">Contact Me</button>
							<button className="px-2 py-2 cursor-pointer">
								<span className="me-2">Download CV</span>
								<HiOutlineDownload className="inline-block" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
