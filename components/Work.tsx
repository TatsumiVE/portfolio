"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import ProjectCard from "./ProjectCard";
import { Pagination } from "swiper/modules";

const projectData = [
  {
    image: "/work/ticket.webp",
    category: "full stack",
    name: "Ticket Management System",
    description:
      "Developed a Ticket Management System using Laravel and React, with Material UI integration.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/interview.jpg",
    category: "full stack",
    name: "Interview Management System",
    description:
      "Developed a Inerview Management System using Laravel and React, with Material UI integration.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "Hotel Landing Page",
    description:
      "Developed a Hotel Landing Page using  React, with Shadcn intergration",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "express js",
    name: "Hospital Appointment System",
    description:
      "Developed a Hospital Appointment System for API using Express JS",
    link: "/",
    github: "/",
  },
];
const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title m-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Discover our web development achievements. Each project reflects our
            commitment to excellence, blending creativity and functionality
            seamlessly.
          </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>

        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px] bg-white dark:bg-background"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {projectData.slice(0, 4).map((project: any, index: number) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
