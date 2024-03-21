"use client";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
const reviewsData = [
  {
    avatar: "/reviews/waiyanphyo.png",
    name: "Wai Yan Phyo",
    job: "Senior Frontend Developer",
    review:
      "Working with Ye Htut Kyaw as a frontend React developer was seamless; their expertise and problem-solving skills consistently surpassed expectations, making them invaluable to any project.",
  },
  {
    avatar: "/reviews/thantsinhtun.png",
    name: "Thant Sin Htun",
    job: "Senior Mobile Developer",
    review:
      "Working with Ye Htut Kyaw was a pleasure! Their expertise in web development, creative problem-solving, and seamless communication make them invaluable for any project",
  },

  {
    avatar: "/reviews/khinkhinhlaing.png",
    name: "Khin Khin Hlaing",
    job: "Ruby Khin Co-Founder",
    review:
      "I couldn't be happier with my decision to choose Website Enterprise for my new website. Their team was easy to work with and helped me create a RubyKhin website in a short amount of time.",
  },
  {
    avatar: "/reviews/zayarnaing.png",
    name: "Zayar Naing",
    job: "Web Developer",
    review:
      "Working with Ye Htut Kyaw was an absolute pleasure! Their unmatched expertise in web development, creative problem-solving, and seamless communication make them an invaluable asset to any project.",
  },
];
const Reviews = () => {
  return (
    <section>
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="h-[350px]"
        >
          {reviewsData.map((person: any, index: number) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      <Image
                        src={person.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                      />

                      <div className="flex flex-col">
                        <CardTitle>{person.name}</CardTitle>
                        <p>{person.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {person.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
