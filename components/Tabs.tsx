"use client";

import { useState } from 'react';
import ProjectSlider from './ProjectSlider';

import sdiaa from "../components/images/sdiaa.png";
import farmerApp  from "../components/images/farmerapp.png";
import reactIcon from "../components/images/react.svg";
import nextIcon from "../components/images/nextjs.svg";
import tailwindIcon from "../components/images/tailwind.svg";
import nodeIcon from "../components/images/nodejs.svg";
import javascriptIcon from "../components/images/js.svg";
import htmlIcon from "../components/images/html.svg";
import cssIcon from "../components/images/css3.svg";
import sassIcon from "../components/images/sass.svg";
import bootstrapIcon from "../components/images/bootstrap.svg";

const projects = [
    {
        id: 1,
        name: "S-DIAA Website",
        image: sdiaa,
        stacks: [reactIcon, tailwindIcon],
        github: "",
        link: "https://s-diaa.org/",
        category: "Web",
    },
    {
        id: 2,
        name: "Farmer App",
        image: farmerApp,
        stacks: [reactIcon, cssIcon],
        github: "",
        link: "https://s-diaa.org/",
        category: "Mobile",
    },
    {
        id: 3,
        name: "Food Website",
        image: sdiaa,
        stacks: [reactIcon, tailwindIcon],
        github: "",
        link: "https://s-diaa.org/",
        category: "Web",
    },
]

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects =
    activeTab === 'All' ? projects : projects.filter((project) => project.category === activeTab);

  return (
    <div>
      <div className="flex justify-center items-center gap-4 my-6 border-b border-gray-200 w-fit">
        {['All', 'Mobile', 'Web'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 cursor-pointer  ${activeTab === tab ? 'border-b-2 font-bold ' : 'border-b-transparent'}`}
          >
            {tab}
          </button>
        ))}
      </div>
      <ProjectSlider projects={filteredProjects} />
    </div>
  );
};

export default Tabs;
