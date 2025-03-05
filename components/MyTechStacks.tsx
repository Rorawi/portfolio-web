import React from "react";
import { FaReact } from "react-icons/fa";

const MyTechStacks = () => {
	return (
		<div>
			<div className="container mx-auto mt-20 mb-40">
				<p className="text-[30px] md:text-5xl font-medium text-center mb-10">
					My Tech Stacks
				</p>
				<div className="p-6 md:p-12 rounded-lg border-2">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						<div className="flex flex-col items-center gap-4 bg-opacity-30 p-4 rounded-lg shadow-md group transition-colors duration-600">
							<FaReact className="text-7xl group-hover:text-blue-500" />
							<span className="text-[30px] md:text-3xl">React</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MyTechStacks;
