import React from "react";
import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "Transform your online  presence with our premium web design services. Our skilled team creates visually captivating and highly functional websites, ensuring your brand stands out in the digital landscape. Elevate your online identity with our expertise in crafting user-centric and web experiences",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "Transform your digital presence with our comprehensive web development services. From dynamic and responsive website design to seamless e-commerce solutions, we specialize in crafting tailored online experiences that elevate your brand and engage your audience effectively",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "Mentor",
    description:
      "Accelerate your React skills with personalized mentorship tailored to your learning journey. Our experienced team of mentors is dedicated to guiding you through the intricacies of React development, providing hands-on support to help you master the art of building dynamic and efficient web applications.",
  },
];
const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">
          My Services
        </h2>

        <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {servicesData.map((item: any, index: number) => {
            return (
              <Card
                className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 ph-10 justify-center items-center relative"
                key={index}
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="text-lg">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
