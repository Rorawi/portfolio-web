"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import sdiaa from "../components/images/sdiaa.png";
import plantguard from "../components/images/plantguard2.png";
import reactIcon from "../components/images/react.svg";
import nextIcon from "../components/images/nextjs.svg";
import tailwindIcon from "../components/images/tailwind.svg";
import firebaseIcon from "../components/images/firebase.svg";
import { GoDotFill } from "react-icons/go";

import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useTheme } from "./ThemeProvider";
import { on } from "events";

const ProjectSlider = () => {
	const theme = useTheme();

	const projects = [
		{
			id: 1,
			name: "S-DIAA Website",
			image: sdiaa,
			stacks: [reactIcon, tailwindIcon],
			github: "",
			link: "https://s-diaa.org/",
			ongoing: false,
		},
		{
			id: 1,
			name: "PlantGuard",
			image: plantguard,
			stacks: [nextIcon, firebaseIcon, tailwindIcon],
			github: "",
			link: "https://plantguard-pink.vercel.app/",
			ongoing: false,
		},
	];
	return (
		<section className="mt-6">
			<div className="">
				<div className="relative">
  <Swiper
    modules={[Navigation]}
    spaceBetween={20}
    slidesPerView={1}
    breakpoints={{
      640: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 2 },
    }}
    navigation={{
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    }}
    grabCursor={true}
    className="w-full lg:h-screen lg:max-h-[600px]"
  >
    {projects.map((project) => {
      return (
       <SwiperSlide key={project.id} className="flex justify-center">
	<div className="group">
		<div className="w-full rounded-xl md:rounded-2xl overflow-hidden p-4 md:p-5  bg-gray-100">
			<Image
				src={project.image}
				alt={project.name}
				width={400} // Set a fixed width
				height={350} // Set a fixed height
				className={`w-full h-[350px] rounded-xl md:rounded-2xl object-cover ${
					theme?.theme === "dark"
						? ""
						: "md:saturate-0 md:group-hover:saturate-100"
				}`}
			/>
									<div className="mt-4">
										<div className="flex justify-between items-center">
											<h6 className="mb-2 md:text-xl font-bold">
												{project.name}
											</h6>
											{project.ongoing && (
												<div className="flex items-center gap-1 ">
													<GoDotFill className="text-yellow-600" />
													<span className="text-yellow-600">
														Ongoing Project
													</span>
												</div>
											)}
										</div>

										<div className="flex space-x-2 justify-between">
											<div className="flex space-x-2 mt-2">
												{project.stacks.map((stack, index) => (
													<div key={project.id + index}>
														<Image
															src={stack}
															alt="stack name"
															width={30}
															height={30}
															className=""
														/>
													</div>
												))}
											</div>

											<div className="flex justify-center items-center space-x-2">
												{project.github !== "" ? (
													<a
														href={project.github}
														className="w-7 h-7 flex justify-center items-center bg-black rounded-full text-white cursor-pointer"
													>
														<FaGithub className="text-white text-md" />
													</a>
												) : null}
												<a
													href={project.link}
													className="px-2 py-2 cursor-pointer flex items-center"
													target="_blank"
													rel="noopener noreferrer"
												>
													<span className="me-2">View Project</span>
													<MdOutlineArrowOutward />
												</a>
											</div>
										</div>
									</div>
									</div>
								</div>
							</SwiperSlide>
      );
    })}
  </Swiper>

  {/* Navigation buttons positioned outside with proper z-index */}
  <div className="swiper-button-prev absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg hidden md:flex items-center justify-center">
    <FaArrowLeft className="text-black text-sm md:text-lg" />
  </div>
  <div className="swiper-button-next absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-50 bg-white/90 hover:bg-white rounded-full p-2 md:p-3 shadow-lg hidden md:flex items-center justify-center">
    <FaArrowRight className="text-black text-sm md:text-lg" />
  </div>
</div>

			</div>
		</section>
	);
};

export default ProjectSlider;
