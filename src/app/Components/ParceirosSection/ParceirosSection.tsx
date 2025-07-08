'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const logos = [
  { src: '/images/abnt.png', alt: 'ABNT' },
  { src: '/images/creasc.png', alt: 'CREA-SC' },
  { src: '/images/creasp.png', alt: 'CREA-SP' },
  { src: '/images/ibapesp.png', alt: 'IBAPE-SP' },
  { src: '/images/ibapsc.png', alt: 'IBAPE-SC' },
];

export default function ParceirosSection() {
  return (
    <section id="parceiros" className="py-20 bg-gray-50 border-t border-gray-200 relative">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-gray-800 mb-12">
          Nossos Parceiros
        </h2>
         <p className="text-center text-gray-600 text-base mb-12 max-w-2xl mx-auto">
        Colaboramos com as principais instituições do setor para oferecer o melhor serviço
        </p>

        {/* Swiper com paginação customizada */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ el: '.custom-swiper-pagination', clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="pb-10"
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 w-full max-w-[160px] h-[100px] flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-16 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-out"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Paginação fora do Swiper */}
        <div className="custom-swiper-pagination mt-20 flex justify-center" />
      </div>

      {/* Ajustes de posição das flechas */}
     <style jsx global>{`
  .swiper-button-prev,
  .swiper-button-next {
    color: #c6865c !important;
    top: 50% !important;
    transform: translateY(-50%) !important;
    z-index: 10 !important;
  }

  @media (min-width: 1024px) {
    .swiper-button-prev {
      left: -48px !important;
    }

    .swiper-button-next {
      right: -48px !important;
    }
  }

  @media (max-width: 1023px) {
    .swiper-button-prev,
    .swiper-button-next {
      display: none !important;
    }
  }

  /* 🔹 AQUI SEPARA AS BOLINHAS 🔹 */
  .custom-swiper-pagination .swiper-pagination-bullet {
    margin: 0 6px !important; /* aumenta o espaçamento lateral */
  }
`}</style>
    </section>
  );
}
