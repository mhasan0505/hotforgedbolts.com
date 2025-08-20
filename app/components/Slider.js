"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Slider() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px]"
        onSlideChange={() => {
          AOS.refresh();
        }}
      >
        {/* slide 01 */}
        <SwiperSlide className="relative w-full h-full">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute top-1/2 left-[5%] sm:left-[10%] transform -translate-y-1/2 text-left z-20 w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl px-4">
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6"
            >
              Precision in Every Forge
            </h1>
            <h3
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-xs sm:text-sm md:text-base lg:text-xl text-white max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-xl leading-relaxed"
            >
              Hot forged bolts and nuts engineered with strength, accuracy, and
              durability — trusted by industries worldwide
            </h3>
          </div>
          <Image
            src="/slider/slider1.jpg"
            alt="slider"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-cover -z-10"
            priority
          />
        </SwiperSlide>

        {/* slide 02 */}
        <SwiperSlide className="relative w-full h-full">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute top-1/2 left-[5%] sm:left-[10%] transform -translate-y-1/2 text-left z-20 w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl px-4">
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6"
            >
              Built to Withstand
            </h1>
            <h3
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-xs sm:text-sm md:text-base lg:text-xl text-white max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-xl leading-relaxed"
            >
              Certified fastening solutions that meet DIN, BS, TE standards —
              from standard bolts to custom specifications.
            </h3>
          </div>
          <Image
            src="/slider/slider2.jpg"
            alt="slider"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-cover -z-10"
            priority
          />
        </SwiperSlide>

        {/* slide 03 */}
        <SwiperSlide className="relative w-full h-full">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute top-1/2 left-[5%] sm:left-[10%] transform -translate-y-1/2 text-left z-20 w-full max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl px-4">
            <h1
              data-aos="fade-right"
              data-aos-delay="200"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6"
            >
              Shaping Strength
            </h1>
            <h3
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-xs sm:text-sm md:text-base lg:text-xl text-white max-w-[280px] sm:max-w-sm md:max-w-lg lg:max-w-xl leading-relaxed"
            >
              Closed die forging solutions for high-performance, safety-critical
              components.
            </h3>
          </div>
          <Image
            src="/slider/slider3.jpg"
            alt="slider"
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
            className="object-cover -z-10"
            priority
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
