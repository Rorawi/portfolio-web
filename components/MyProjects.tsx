import React from "react";
import ProjectSlider from "./ProjectSlider";

const MyProjects = () => {
	return (
		<div id="portfolio">
			<div className="container mx-auto mt-20 mb-20">
                <div className="px-5 lg:px-20">
				<h6 className="mb-3">Works</h6>
				<p className="text-[25px] md:text-4xl font-medium  md:max-w-xl">
                Take a peek at my projects
				</p>

                <div>
					{/* <Tabs /> */}
                    <ProjectSlider />
                </div>
                </div>
			</div>
		</div>
	);
};

export default MyProjects;
