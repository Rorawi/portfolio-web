import React from "react";
import ProjectSlider from "./ProjectSlider";

const MyProjects = () => {
	return (
		<div >
			<div className="container mx-auto mt-20 mb-40">
                <div className="px-5 md:px-20">
				<h6 className="mb-5">Portfolio</h6>
				<p className="text-[30px] md:text-5xl font-medium mb-2 md:max-w-xl">
                Take a peek at my portfolio
				</p>

                <div>
                    <ProjectSlider />
                </div>
                </div>
			</div>
		</div>
	);
};

export default MyProjects;
