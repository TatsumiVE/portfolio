"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import { TabsContent } from "@radix-ui/react-tabs";
const projectData = [
  {
    image: "/work/ticket.webp",
    category: "full stack",
    name: "Ticket Management System",
    description:
      "This project involves developing a Ticket Management System using Laravel and React, with Material UI integration.",
    link: "/",
    github: "/",
    alt: "ticket management system",
  },
  {
    image: "/work/interview.jpg",
    category: "full stack",
    name: "Interview Management System",
    description:
      "This project involves developing a Inerview Management System using Laravel and React, with Material UI integration.",
    link: "/",
    github: "/",
    alt: "interview management system",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "Hotel Landing Page",
    description:
      "This project involves developing a Hotel Landing Single Page using  React, Next Js and Typescript with Shadcn intergration",
    link: "/",
    github: "/",
    alt: "hotel landing",
  },
  {
    image: "/work/4.png",
    category: "express js",
    name: "Hospital Appointment System",
    description:
      "This project involves developing a Hospital Appointment System for API using Express JS",
    link: "/",
    github: "/",
    alt: "hospital appointment system",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item: any) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filterProjects = projectData.filter((project: any) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        <Tabs defaultValue={category} className="pb-24 xl:pb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category: string, index: number) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filterProjects.map((project: any, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
