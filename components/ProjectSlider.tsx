"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Image from "next/image";
import sdiaa from "../components/images/sdiaa.png";
import farmerApp from "../components/images/farmerapp.png";
import reactIcon from "../components/images/react.svg";
import nextIcon from "../components/images/nextjs.svg";
import tailwindIcon from "../components/images/tailwind.svg";
import nodeIcon from "../components/images/nodejs.svg";
import javascriptIcon from "../components/images/js.svg";
import htmlIcon from "../components/images/html.svg";
import cssIcon from "../components/images/css3.svg";
import sassIcon from "../components/images/sass.svg";
import bootstrapIcon from "../components/images/bootstrap.svg";

import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { link } from "fs";
import { useTheme } from "./ThemeProvider";

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
		},
		{
			id: 2,
			name: "Farmer App",
			image: farmerApp,
			stacks: [reactIcon, cssIcon],
			github: "",
			link: "https://s-diaa.org/",
		},
		{
			id: 2,
			name: "Food Website",
			image: sdiaa,
			stacks: [reactIcon, tailwindIcon],
			github: "",
			link: "https://s-diaa.org/",
		},
	];
	return (
		<section className="mt-6">
			<div className="">
				<Swiper
					modules={[Navigation]}
					spaceBetween={20}
					slidesPerView={1}
					breakpoints={{
						640: { slidesPerView: 1 },
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
					}}
					navigation={{
						nextEl: ".swiper-button-next",
						prevEl: ".swiper-button-prev",
					}}
					grabCursor={true}
					className="w-full"
				>
					{projects.map((project) => {
						return (
							<SwiperSlide key={project.id} className="flex justify-center">
								<div className="group">
									<div className="w-full h-[250px] rounded-lg overflow-hidden pt-3 px-3 pb-4  bg-gray-100">
										<Image
											src={project.image}
											alt={project.name}
											layout="responsive"
											objectFit="cover"
											className={`w-full h-full rounded-lg object-cover ${theme === 'dark' ? "": "md:saturate-0 md:group-hover:saturate-100"}`}
										/>
									</div>
									<div className="mt-4">
										<h6 className="mb-2 font-bold">{project.name}</h6>

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
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</section>
	);
};

export default ProjectSlider;
