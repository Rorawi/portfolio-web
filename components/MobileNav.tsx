import { FaLinkedin, FaTimes } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
const MobileNav = () => {
	return (
		<>
			<div
				className="lg:hidden fixed bottom-0 top-0 left-0 w-full h-full bg-[#000000B3] z-50 flex flex-col transition-all"
				//   onClick={setToggle}
			>
				<div className="p-4 flex justify-between items-center">
					<div className="bg-gradient-to-bl from-[#AA00FF] to-[#0DCCF2]  w-9 h-9 rounded-full flex justify-center items-center lg:hidden">
						<h1 className="text-xl text-white font-bold font-poppins">W</h1>
					</div>
					<div className="block lg:hidden">
						<button
							//   onClick={setToggle}
							className="w-10 h-10 bg-white text-black flex justify-center items-center rounded-full focus:outline-none"
						>
							<FaTimes />
						</button>
					</div>
				</div>
				<ul
					className="space-y-8
     flex flex-col items-center justify-center h-full"
				>
					<li>
						<a
							href="/about"
							className="text-white font-medium text-2xl hover:text-gray-400"
							//   onClick={setToggle}
						>
							About
						</a>
					</li>
					<li>
						<a
							target="_blank"
							className="text-white font-medium text-2xl hover:text-gray-400"
							//   onClick={setToggle}
						>
							Resume
						</a>
					</li>
					<li>
						<a
							href="https://www.linkedin.com/in/josephadofo/"
							className="text-white font-medium text-2xl hover:text-gray-400 flex items-center gap-2"
							//   onClick={setToggle}
						>
							<FaLinkedin />
							LinkedIn
						</a>
					</li>
					<li>
						<a
							href="https://www.behance.net/kwabenaadofo"
							className="text-white font-medium text-2xl hover:text-gray-400 flex items-center gap-2"
							//   onClick={setToggle}
						>
							Behance
						</a>
					</li>

					<li>
						<a
							href="#"
							className="rounded-full text-xl p-3 bg-white shadow-sm  shrink-0 flex items-center justify-center gap-2 hover:scale-105 transition-all duration-100"
						>
							<MdOutlineArrowOutward className="text-black text-2xl" />
							<h6 className="font-semibold">Contact Me</h6>
						</a>
					</li>
				</ul>
			</div>
		</>
	);
};

export default MobileNav;
