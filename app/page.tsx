"use client";

import React from "react";
import Hero from "../components/Hero";
import MyTechStacks from "../components/MyTechStacks";
import MyProjects from "../components/MyProjects";
import Footer from "../components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
export default function Home() {
	return (
		<div className="">
			<ThemeProvider>
			<Hero />
			<MyTechStacks />
			<MyProjects />
			<Footer />
			</ThemeProvider>
		</div>
	);
}
