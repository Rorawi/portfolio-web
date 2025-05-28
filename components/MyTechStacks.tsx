import React from "react";
import Image from "next/image";
import reactIcon from "../components/images/react.svg"
import nextIcon from "../components/images/nextjs.svg"
import tailwindIcon from "../components/images/tailwind.svg"
import nodeIcon from "../components/images/nodejs.svg"
import firebaseIcon from "../components/images/firebase.svg"
import javascriptIcon from "../components/images/js.svg"
import htmlIcon from "../components/images/html.svg"
import cssIcon from "../components/images/css3.svg"
import sassIcon from "../components/images/sass.svg"
import bootstrapIcon from "../components/images/bootstrap.svg"
import { useTheme } from "./ThemeProvider";


const MyTechStacks = () => {
	const theme = useTheme();

	const stacks = [
		{
			id: 1,
			name: "React",
			icon: reactIcon,
			width: 100,
			height: 100
		},
		{
			id: 2,
			name: "Next.js",
			icon: nextIcon,
			width: 100,
			height: 100
		},
		{
			id: 3,
			name: "Tailwind CSS",
			icon: tailwindIcon,
			width: 100,
			height: 100
		},
		{
			id: 4,
			name: "Node.js",
			icon: nodeIcon,
			width: 160,
			height: 160
		},
		{
			id: 7,
			name: "Firebase",
			icon: firebaseIcon,
			width: 100,
			height: 100
		},
		{
			id: 12,
			name: "JavaScript",
			icon: javascriptIcon,
			width: 100,
			height: 100
		},
		{
			id: 13,
			name: "HTML5",
			icon: htmlIcon,
			width: 100,
			height: 100
		},
		{
			id: 14,
			name: "CSS3",
			icon: cssIcon,
			width: 100,
			height: 100
		},
		{
			id: 15,
			name: "Sass",
			icon: sassIcon,
			width: 135,
			height: 135
		},
		{
			id: 16,
			name: "Bootstrap",
			icon: bootstrapIcon,
			width: 100,
			height: 100,
		}
	]
	return (
		<div className="" id="techstacks">
			<div className="container mx-auto mt-20 mb-40">
			<div className="px-5 lg:px-20">
			<h6 className="mb-3">
				Technologies
			</h6>
				<p className="text-[25px] md:text-4xl font-medium mb-8">
					My Tech Stacks
				</p>
				<div className="p-6 md:p-12 rounded-lg border-2 border-gray-400 group">
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
						{stacks.map((stack) => (
							<div className="h-40 flex flex-col items-center justify-center" key={stack.name}>
							<div  className="flex flex-col justify-center items-center group transition-colors duration-500 ease-in-out">
								<Image src={stack.icon} alt={stack.name} width={stack.width} height={stack.height} 
								className={`${(typeof theme === 'string' && theme === 'dark') ? "" : " md:saturate-0 md:group-hover:saturate-100"}`}/>
								<span className="text-xl">{stack.name}</span>
							</div>
							</div>
						))}
					</div>
				</div>
			</div>
			</div>
		</div>
	);
};

export default MyTechStacks;
