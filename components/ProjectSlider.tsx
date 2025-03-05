"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const ProjectSlider = () => {
	return (
		<section className="">
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
						clickable: true,
					}}
					grabCursor={true}
					className="w-full"
				>
					<SwiperSlide className="flex justify-center">
						
					</SwiperSlide>
				</Swiper>
			</div>
		</section>
	);
};

export default ProjectSlider;
