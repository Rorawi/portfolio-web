import React from "react";
import Navbar from "../components/Navbar";
import ghana from "../components/images/ghana.svg";
import profileImg2 from "../components/images/Wini2.jpg";
import scrolldown from "../components/images/scrolldown.gif";

import { HiOutlineDownload } from "react-icons/hi";
import Image from "next/image";
import * as motion from "motion/react-client";
import { useTheme } from "./ThemeProvider";

const Hero = () => {
	const theme = useTheme();
	return (
		<div className="h-[96vh] relative overflow-hidden">
			<Navbar />

			<div className="pb-16 px-5 md:px-20 flex flex-col justify-center items-center h-full">
				<div className="md:max-w-xl text-center group">
					<div className="flex justify-center mb-8">
						<motion.div
							initial={{ opacity: 0, scale: 0 }}
							animate={{ opacity: 1, scale: 1 }}
							whileInView={{ scale: 1.1, opacity: 1 }}
							transition={{
								duration: 0.4,
								scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
							}}
						>
							<div className="w-24 h-24 rounded-full overflow-hidden pb-4">
								<Image
									src={profileImg2}
									alt="Profile Image"
									layout="responsive"
									width={80}
									height={80}
									objectFit="cover"
									className={`${theme === 'dark' ? "": "grayscale-100 group-hover:grayscale-0"} `}
								/>
							</div>
						</motion.div>
					</div>
					<h6 className="mb-5 flex items-center justify-center">
						Hi! I’m Winifred{" "}
						<span className="flex items-center justify-center">
							✌🏻
							<Image src={ghana} width={17} alt="ghana flag logo" />
						</span>{" "}
					</h6>
					<div>
						<p className="text-[30px] md:text-5xl font-medium text-center mb-2">
							UX & Frontend Engineer
						</p>
						<p className={`text-center ${theme === "dark" ? "text-white/80" : "text-secondary"}`}>
							{" "}
							I specialize in crafting engaging user experiences and beautiful,
							responsive interfaces, with a strong focus on user-centered design
							and seamless interactivity.
						</p>

						<div className="mt-6 flex flex-col md:flex-row justify-center space-x-4">
							<a
								href="mailto:winifredasante15@gmail.com"
								className={`px-5 py-2 rounded-full cursor-pointer mb-2 md:mb-0 	${theme === "dark" ? "bg-white text-black" : " bg-black text-white "}`}
							>
								Get In Touch
							</a>
							<button className="px-2 py-2 cursor-pointer">
								<span className="me-2">My Resume</span>
								<HiOutlineDownload className="inline-block" />
							</button>
						</div>
					</div>

					<div className="flex justify-center mt-15">
						<a href="#techstacks">
							<Image
								src={scrolldown}
								alt="scroll down"
								width={50}
								height={50}
								className={`${theme === "dark" ? "filter invert" : ""}`}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
