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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloribus.",
  },
  {
    avatar: "/reviews/thantsinhtun.png",
    name: "Thant Sin Htun",
    job: "Senior Mobile Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloribus.",
  },
  {
    avatar: "/reviews/kaungset.png",
    name: "Kaung Set",
    job: "Web Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloribus.",
  },
  {
    avatar: "/reviews/khinkhinhlaing.png",
    name: "Khin Khin Hlaing",
    job: "Ruby Khin Co-Founder",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloribus.",
  },
  {
    avatar: "/reviews/zayarnaing.png",
    name: "Zayar Naing",
    job: "Web Developer",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, doloribus.",
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
