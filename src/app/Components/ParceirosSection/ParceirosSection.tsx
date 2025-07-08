'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const logos = [
  { src: '/images/abnt.png', alt: 'Abnt' },
  { src: '/images/creasc.png', alt: 'CREA-SC' },
  { src: '/images/creasp.png', alt: 'CREA-SP' },
  { src: '/images/ibapesp.png', alt: 'IBAPE-SP' },
  { src: '/images/ibapsc.png', alt: 'IBAPE-SC' },
];

export default function ParceirosSection() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-800 mb-12">
          Nossos Parceiros
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={40}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-8"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 w-full max-w-[160px] h-[100px] flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
