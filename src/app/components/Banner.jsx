"use client"; // if using App Router in Next.js 13+

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";

export default function Banner() {
  // State per slide
  const [activeSlide, setActiveSlide] = useState(null);

  const handleClick = (index) => {
    setActiveSlide((prev) => (prev === index ? null : index));
  };

  const slides = [
    {
      id: 1,
      title: "Welcome to Our Platform",
      img: "https://images.unsplash.com/photo-1593998066526-65fcab3021a2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      desc: "🚀 Our platform helps you explore, learn, and build amazing things with modern technology. Join us and start your journey!",
      buttonColor: "bg-green-500 hover:bg-green-600",
    },
    {
      id: 2,
      title: "Build Something Amazing",
      img: "https://images.unsplash.com/photo-1575330933415-cea1e7ce53eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3RzfGVufDB8fDB8fHww",
      desc: "💡 Discover powerful tools and resources to create professional-grade projects faster and smarter.",
      buttonColor: "bg-blue-500 hover:bg-blue-600",
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg my-10">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-[400px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.img}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0}
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white px-4 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl font-bold mb-4"
                >
                  {slide.title}
                </motion.h2>
                <button
                  onClick={() => handleClick(index)}
                  className={`px-6 py-2 ${slide.buttonColor} rounded-full shadow-md transition`}
                >
                  {activeSlide === index ? "Hide Info" : "Show Info"}
                </button>

                {/* Toggleable description */}
                {activeSlide === index && (
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 max-w-lg text-sm md:text-base"
                  >
                    {slide.desc}
                  </motion.p>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
