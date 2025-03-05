import React from "react";
import Navbar from "../components/Navbar";
import bgpattern from "../components/images/bgpattern.avif";
import profileImg from "../components/images/profile.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const Hero = () => {
	return (
		<div className="h-[100vh] hero-section relative overflow-hidden">
			<Navbar />

			<div className="pb-16 px-10 md:px-20 flex flex-col justify-center items-center h-full z-20 relative">
				<div className="md:max-w-xl text-center">
					<div className="flex justify-center mb-8">
						<div className="w-24 h-24 rounded-full overflow-hidden pb-4">
							<Image
								src={profileImg}
								alt="Profile Image"
								layout="responsive"
								width={80}
								height={80}
								objectFit="cover"
							/>
						</div>
					</div>
					<h6>Hi! I’m Winifred ✌🏻 </h6>
					<div>
						<p className="text-[30px] md:text-5xl font-medium text-center mb-5">
							UI/UX Designer based in Moscow, Russia
						</p>
						<p className="text-center text-secondary">
							{" "}
							I specialize in creating intuitive user experiences and visually
							appealing interfaces, with a focus on user-centered design.
						</p>

						<div className="mt-4">
							<button className=""></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
