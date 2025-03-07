import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";

const ProjectSlider = ({ projects }) => {
  return (
    <section className="mt-10">
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
        {projects.map((project) => (
          <SwiperSlide key={project.id} className="flex justify-center">
            <div className="group">
              <div className="w-full h-[175px] rounded-lg overflow-hidden pb-4">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="responsive"
                  objectFit="cover"
                  className="w-full h-full object-cover md:saturate-0 md:group-hover:saturate-100"
                />
              </div>
              <div className="mt-4">
                <h6 className="mb-2 font-bold">{project.name}</h6>
                <div className="flex space-x-2 justify-between">
                  <div className="flex space-x-2 mt-2">
                    {project.stacks.map((stack, index) => (
                      <Image
                        key={index}
                        src={stack}
                        alt="stack name"
                        width={30}
                        height={30}
                      />
                    ))}
                  </div>
                  <div className="flex justify-center items-center space-x-2">
                    {project.github && (
                      <a
                        href={project.github}
                        className="w-7 h-7 flex justify-center items-center bg-black rounded-full text-white cursor-pointer"
                      >
                        <FaGithub className="text-white text-md" />
                      </a>
                    )}
                    <a
                      href={project.link}
                      className="px-2 py-2 cursor-pointer flex items-center"
                    >
                      <span className="me-2">View Project</span>
                      <MdOutlineArrowOutward />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

		<div className="swiper-button-prev"></div>
		<div className="swiper-button-next"></div>
      </Swiper>
    </section>
  );
};

export default ProjectSlider;
