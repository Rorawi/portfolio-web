import React from "react";
import Hero from "../components/Hero";
import MyTechStacks from "../components/MyTechStacks";
import MyProjects from "../components/MyProjects";
export default function Home() {
	return (
		<div className="">
			<Hero />
			{/* <MyTechStacks /> */}
      <MyProjects />
		</div>
	);
}
