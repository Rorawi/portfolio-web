"use client";

import {
	FaInstagram,
	FaLinkedin,
	FaMailBulk,
	FaGithub,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import logo from "../components/images/Wini.png";
import { useState } from "react";

const Navbar = () => {
	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
	const closeMobileNav = () => setIsMobileNavOpen(false);

	const toggleMobileNav = () => {
		setIsMobileNavOpen(!isMobileNavOpen);
	};

	return (
		<div className="container mx-auto">
		<header className="flex px-4 justify-between items-center bg-transparent py-4 relative z-50">
			<Image src={logo} alt="logo" width={100} height={100} />
			<FiMenu
				id="menu-btn"
				className="lg:hidden text-[30px] text-black cursor-pointer"
				onClick={toggleMobileNav}
			/>

			<div className="hidden lg:block">
				<div className="py-2 px-2 flex items-center justify-center gap-3">
					<div className="flex justify-center space-x-7">
						<a href="#portfolio" className="font-poppin font-semibold">
							Portfolio
						</a>
						<a href="#footer" className="font-poppin font-semibold">
							Contact
						</a>
						<a href="#" target="_blank" className="font-poppin font-semibold">
							Resume
						</a>
					</div>
				</div>
			</div>

			<div className="hidden lg:flex space-x-4">
				<a
					href="https://github.com/Rorawi"
					target="_blank"
					rel="noopener noreferrer"
					className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100"
				>
					<FaGithub className="text-black text-2xl" />
				</a>
				<a
					href="https://www.linkedin.com/in/winifredasantewaaasante"
					target="_blank"
					rel="noopener noreferrer"
					className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100"
				>
					<FaLinkedinIn className="text-blue text-2xl" />
				</a>
				<a
					href="mailto:winifredasante15@gmail.com"
					className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100"
				>
					<SiGmail className="text-black text-2xl" />
				</a>
			</div>

			{/* Mobile navigation */}
			{isMobileNavOpen && (
				<div className="fixed inset-0 bg-white flex flex-col items-center justify-center" onClick={closeMobileNav}>
					<FiX
						onClick={closeMobileNav}
						className="absolute top-4 right-4 text-3xl text-black cursor-pointer"
					/>
					<a href="#portfolio" className="font-poppin font-semibold text-lg">Portfolio</a>
					<a href="#footer" className="font-poppin font-semibold text-lg">Contact</a>
					<a href="#" target="_blank" className="font-poppin font-semibold text-lg">Resume</a>

					<div className="flex space-x-4 mt-4">
						<a href="https://github.com/Rorawi" target="_blank" rel="noopener noreferrer" className="text-2xl">
							<FaGithub />
						</a>
						<a href="https://www.linkedin.com/in/winifredasantewaaasante" target="_blank" rel="noopener noreferrer" className="text-2xl">
							<FaLinkedinIn />
						</a>
						<a href="mailto:winifredasante15@gmail.com" className="text-2xl">
							<SiGmail />
						</a>
					</div>
				</div>
			)}
		</header>
		</div>
	);
};

export default Navbar;
