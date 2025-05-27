"use client";

import React from "react";
import Hero from "../components/Hero";
import MyTechStacks from "../components/MyTechStacks";
import MyProjects from "../components/MyProjects";
import Footer from "../components/Footer";
export default function Home() {
	return (
		<div className="">
			{/* <ThemeProvider> */}
			<Hero />
			<MyTechStacks />
			<MyProjects />
			<Footer />
			{/* </ThemeProvider> */}
		</div>
	);
}
