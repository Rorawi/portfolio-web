"use client";

import {
	FaGithub,
	FaLinkedinIn,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiMenu, FiX } from "react-icons/fi";
import Image from "next/image";
import logo from "../components/images/Wini.png";
import logoBlack from "./images/wini-black.png";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";
import { HiOutlineSun } from "react-icons/hi";
import { HiOutlineMoon } from "react-icons/hi";

const Navbar = () => {
	const theme = useTheme();

	const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
	const closeMobileNav = () => setIsMobileNavOpen(false);

	const toggleMobileNav = () => {
		setIsMobileNavOpen(!isMobileNavOpen);
	};



	return (
		<div className="container mx-auto">
			<div className="px-5 lg:px-20">
		<header className="flex justify-between items-center bg-transparent py-4 relative z-50">
			{theme === 'dark' ? (
				<Image src={logoBlack} alt="logo" width={100} height={100} />
			) : (
				<Image src={logo} alt="logo" width={100} height={100} />
			)}
			<FiMenu
				id="menu-btn"
				className="lg:hidden text-[30px] text-black cursor-pointer"
				onClick={toggleMobileNav}
			/>

			<div className="hidden lg:block">
				<div className="py-2 px-2 flex items-center justify-center gap-3 ms-8">
					<div className="flex justify-center space-x-7">
						<a href="#portfolio" className="font-poppin font-semibold">
							Works
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
					<FaLinkedinIn className="text-black text-2xl" />
				</a>
				<a
					href="mailto:winifredasante15@gmail.com"
					className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100"
				>
					<SiGmail className="text-black text-2xl" />
				</a>
				{/* <a
					className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center hover:scale-105 transition-all duration-100"
				>
					{}
					<HiOutlineSun className="text-black text-2xl" />
					<HiOutlineMoon className="text-black text-2xl" />
				</a> */}
			</div>

			{/* Mobile navigation */}
			{isMobileNavOpen && (
				<div className="fixed inset-0 bg-white flex flex-col items-center justify-center" onClick={closeMobileNav}>
					<FiX
						onClick={closeMobileNav}
						className="absolute top-4 right-4 text-3xl text-black cursor-pointer"
					/>
					<a href="#portfolio" className="font-poppin font-semibold text-lg">Works</a>
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
		</div>
	);
};

export default Navbar;
