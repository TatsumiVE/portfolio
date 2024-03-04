import React from "react";
import ProfileImage from "./ProfileImage";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  Briefcase,
  Calendar,
  GraduationCap,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Ye Htut Kyaw",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+95 09 445 540 073",
  },
  {
    icon: <MailIcon size={20} />,
    text: "yehtutkyaw.tatsumi@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 14 July, 2000",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Computer Science Taungoo, Myanamr",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Bago Myanmar",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        name: "Computer University Taungoo",
        qualification: "Bachelor fo Computer Science",
        years: "2017-2026",
      },
      {
        name: "FairWay",
        qualification: "Professional Web Developer",
        years: "2018",
      },
      {
        name: "Code Lab",
        qualification: "FullStack Developer",
        years: "2022",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        name: "Aceplus Solutions Company",
        role: "Junior Web Developer",
        years: "2023 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      { name: "HTML, CSS, JS" },
      { name: "PHP, LARAVEL" },
      { name: "REACT, NEXT JS" },
      { name: "NODE JS, EXPRESS JS" },
      { name: "BOOTSTRAP, TAILWIND" },
      { name: "SHADCN, MUI" },
      {
        name: "MYSQL, POSTGRESQL, MONGO DB ",
      },
    ],
  },
];
const About = () => {
  const getData = (arr: any, title: string) => {
    return arr.find((item: any) => item.title === title);
  };
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          <div className="hidden xl:flex flex-1 relative">
            <ProfileImage
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/hero/yehtutkyaw.png"
            ></ProfileImage>
          </div>
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 2 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialize in crafting intutive websites with
                      cutting-edge technology, delivering dynamic and engaing
                      user experiences.
                    </p>

                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skills</div>
                      <div className="border-b border-border"></div>
                      <div>English, Japanese (N5) </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item: any, index: number) => {
                              const { name, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {name}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>

                      {/* experience */}

                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>

                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item: any, index: number) => {
                              const { name, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {name}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-8">
                      I have experienced Programming Languages
                    </h3>

                    <h4 className="text-xl font-semibold mb-2">
                      Problems Solving With
                    </h4>
                  </div>
                  <div className="border-b border-border mb-4"></div>

                  <div className="mb-16">
                    {getData(skillData, "skills").data.map(
                      (item: any, index: number) => {
                        const { name } = item;
                        return (
                          <div
                            className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="font-medium">{name}</div>
                          </div>
                        );
                      }
                    )}
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
