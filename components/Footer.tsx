import { div } from "framer-motion/client";
import {
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaInstagram,
	FaMailBulk,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import logoBlack from "./images/wini-black.png";

const Footer = () => {
	return (
		<div>
			<footer className="bg-black text-white text-center py-[20px]">
				<div className="container mx-auto">
					<div className="px-5 lg:px-20">
						<div className="flex flex-col md:flex-row justify-between md:items-center mt-7">
							<div>
								<Image
									src={logoBlack}
									alt="logo"
									width={80}
									height={80}
									className="mb-8 md:mb-0"
								/>
								<p className="text-left text-[16px] flex items-center gap-1 hidden">
									<HiOutlineMail size={16} />
									winifredasante@gmail.com
								</p>
							</div>
							<div>
								<div className="grid grid-cols-2 md:grid-cols-3 gap-10">
									<a
										href="mailto:winifredasante15@gmail.com"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-red-400  transition-colors duration-300 flex items-center gap-2"
									>
										<HiOutlineMail size={24} />

										<span>Google Mail </span>
									</a>
									<a
										href="https://www.linkedin.com/in/winifredasantewaaasante/"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-blue-700 transition-colors duration-300 flex items-center gap-2"
									>
										<FaLinkedin size={24} />
										<span>LinkedIn</span>
									</a>
									<a
										href="https://www.instagram.com/adwoa_asantewaa_winifred/"
										target="_blank"
										rel="noopener noreferrer"
										className="hover:text-pink-500 transition-colors duration-300 flex items-center gap-2"
									>
										<FaInstagram size={24} />
										<span>Instagram</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <p className="text-sm mt-5 text-gray-600">Designed & Built with ❤️ by Winifred</p> */}
			</footer>
		</div>
	);
};

export default Footer;
