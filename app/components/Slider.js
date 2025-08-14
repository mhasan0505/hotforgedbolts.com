"use client";

// Import Swiper React components
import { motion } from "framer-motion"; // Add this import at the top
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function Slider() {
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
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
        }}
      >
        {/* slide 01 */}
        <SwiperSlide className="relative w-full h-full">
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left z-20 w-full px-4 lg:px-8">
            <motion.h1
              key={`heading-0`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-7xl font-bold text-white mb-4"
            >
              Precision in Every Forge
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm md:text-xl text-white max-w-3xl text-left mt-8"
            >
              <div data-aos="zoom-in-right">
                Hot forged bolts and nuts engineered with strength, accuracy,
                and durability — trusted by industries worldwide
              </div>
            </motion.h3>
          </div>
          <Image
            src="/slider/slider1.jpg"
            alt="slider"
            fill
            sizes="(max-width: 640px) 100vw,
                   (max-width: 768px) 100vw,
                   (max-width: 1024px) 100vw,
                   100vw"
            className="object-cover -z-10"
            priority
          />
        </SwiperSlide>

        {/* slide 02 */}
        <SwiperSlide className="relative w-full h-full">
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left z-20 w-full px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-6xl font-bold text-white mb-4"
            >
              Built to Withstand the Toughest Demands
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm md:text-xl text-white text-left max-w-3xl mt-8"
            >
              Certified fastening solutions that meet DIN , BS, TE standards —
              from standard bolts,nuts to custom specifications.
            </motion.h3>
          </div>
          <Image
            src="/slider/slider2.jpg"
            alt="slider"
            fill
            sizes="(max-width: 640px) 100vw,
                   (max-width: 768px) 100vw,
                   (max-width: 1024px) 100vw,
                   100vw"
            className="object-cover -z-10"
            priority
          />
        </SwiperSlide>

        {/* slide 03 */}

        <SwiperSlide className="relative w-full h-full">
          <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-left z-20 w-full px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-6xl font-bold text-white mb-4"
            >
              Shaping Strength with Precision
            </motion.h1>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-sm text-left md:text-xl text-white max-w-3xl mt-8"
            >
              Closed die forging solutions for high-performance, safety-critical
              components.
            </motion.h3>
          </div>
          <Image
            src="/slider/slider3.jpg"
            alt="slider"
            fill
            sizes="(max-width: 640px) 100vw,
                   (max-width: 768px) 100vw,
                   (max-width: 1024px) 100vw,
                   100vw"
            className="object-cover -z-10"
            priority
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
