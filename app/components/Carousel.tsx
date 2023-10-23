"use client";
import Image from "next/image";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

type SlideData = {
  imgSrc: any;
  title: string;
  desc?: string;
  href?: string;
};

export default function Carousel({ slides }: { slides: SlideData[] }) {
  return (
    <Slide
      duration={5000}
      cssClass="  bg-card p-2 rounded-lg "
      arrows
      responsive={[
        { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        { breakpoint: 900, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      ]}
      easing="cubic-out"
      transitionDuration={250}
    >
      {slides.map((slide, idx) => {
        return (
          <div key={idx} className="flex flex-col items-center">
            <h2 className="font-semibold tracking-tighter text-3xl ">
              {slide.title}
            </h2>
            <Image
              src={slide.imgSrc}
              alt=""
              width={250}
              height={250}
              className=""
            />
          </div>
        );
      })}
    </Slide>
  );
}
