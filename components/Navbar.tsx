import {
	FaInstagram,
	FaLinkedin,
	FaMailBulk,
	FaGithub,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiMenu } from "react-icons/fi";
import MobileNav from "../components/MobileNav";
// import cv from "../components/images";
import Image from "next/image";
import logo from "../components/images/Wini.png";

const Navbar = () => {

	return (
		<header className="flex px-4 justify-between items-center bg-transparent py-4 relative z-50">
			<div className="bg-gradient-to-bl from-[#AA00FF] to-[#0DCCF2]  w-9 h-9 rounded-full flex justify-center items-center lg:hidden">
				<h1 className="text-xl text-white font-bold font-poppins">W</h1>
			</div>
			<FiMenu
				id="menu-btn"
				className="md:hidden text-[30px] text-white"
				// onClick={setToggle}
			/>

			<div className="hidden lg:block">
				<div className=" py-2 ps-2 pe-4 flex items-center justify-center gap-3">
					<Image 
					src={logo}
					alt="logo"
					width={80}
					height={80}
					/>
					<div className="flex justify-center space-x-7 hidden">
						<div>
							<a href="#services" className="font-poppin font-semibold">
								Service
							</a>
						</div>
						<div>
							<a href="#portifolio" className="font-poppin font-semibold">
								Portifolio
							</a>
						</div>
						<div>
							<a href="#footer" className="font-poppin font-semibold">
								Contact
							</a>
						</div>

						<a href="#" target="_blank" className="font-poppin font-semibold">
							<h6 className="font-semibold">Resume</h6>
						</a>
						{/* //Menu nav here classname md:hidden */}
					</div>
				</div>
			</div>

			{/* {isTrue && <MobileNav setToggle={setToggle} />} */}
			<div className="hidden lg:block">
				<div className="md:flex-row flex space-x-4 justify-evenly items-center flex-col  py-[35px] pl-[10px] rounded-xl">
					<div className="flex justify-center space-x-4">
						<a
							href="https://github.com/Rorawi"
							target="_blank"
							rel="noopener noreferrer"
							className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100"
						>
							<FaGithub className=" text-black text-2xl" />
						</a>
						<a
							href="https://www.linkedin.com/in/winifredasantewaaasante"
							target="_blank"
							rel="noopener noreferrer"
							className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100"
						>
							<FaLinkedinIn className=" text-blue text-2xl" />
						</a>

						<a
							href="mailto:winifredasante15@gmail.com"
							className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100"
						>
							<SiGmail className=" text-black text-2xl" />
						</a>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
