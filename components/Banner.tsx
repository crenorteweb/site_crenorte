"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/banner_1.png",
    title: "MICROCRÉDITO INDIVIDUAL",
  },
  {
    image: "/banner_1.png",
    title: "MAIS OPORTUNIDADES",
  },
  {
    image: "/banner_1.png",
    title: "MAIS OPORTUNIDADES",
  },
];

export default function Banner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full overflow-hidden" ref={emblaRef}>
      <div className="flex">
        {slides.map((slide, index) => (
          <div key={index} className="flex-[0_0_100%] min-w-0 relative">
            <div className="mx-auto w-full">
              
              {/* Container do Banner Estilo Card */}
              <div className="relative flex w-full flex-col overflow-hidden">

                {/* Área da Imagem */}
                <div className="relative h-150 sm:h-87.5 md:h-150 w-full">
                   <Image 
                    src={slide.image} 
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                   />
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de Navegação */}
      <button
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-white/70 text-brand-dark backdrop-blur-sm hover:bg-white transition-colors"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 flex items-center justify-center rounded-full bg-white/70 text-brand-dark backdrop-blur-sm hover:bg-white transition-colors"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Indicadores (Dots) */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              index === selectedIndex ? "w-6 bg-brand-main" : "w-2 bg-brand-main/30"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
}
