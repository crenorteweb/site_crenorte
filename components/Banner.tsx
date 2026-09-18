"use client";

import { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TitleBanc } from "./textBanc/TitleBanc";

const slides = [
  {
    image: "/prancheta-2.png",
    imageMobile: "/prancheta-7.png",
    title: "MICROCRÉDITO INDIVIDUAL e GRUPO SOLIDÁRIO",
  },
  {
    image: "/prancheta-1.png",
    imageMobile: "/prancheta-5.png",
    title: "MELHOR MICROCRÉDITO DA AMAZÔNIA",
  },
  // {
  //   image: "/prancheta-3.png",
  //   imageMobile: "/prancheta-6.png",
  //   title: "NÃO CAIA EM GOLPES!",
  // },
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
    <section className="bg-white text-brand-dark w-full">
      <div className="relative w-full overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {slides.map((slide, index) => (
            <div key={index} className="flex-[0_0_100%] min-w-0 relative">
              <div className="mx-auto w-full">

                {/* Container do Banner Estilo Card */}
                <div className="relative flex w-full flex-col overflow-hidden">

                  {/* Área da Imagem */}
                  <div className="relative h-110 sm:h-87.5 md:h-150 w-full">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-cover hidden sm:block"
                      priority={index === 0}
                    />
                    <Image
                      src={slide.imageMobile}
                      alt={slide.title}
                      fill
                      className="object-cover block sm:hidden"
                      priority={index === 0}
                    />

                    {/* Overlay em gradiente para dar profundidade e legibilidade ao título */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/85 via-brand-dark/10 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 px-6 pb-20 sm:px-10 sm:pb-16 md:px-16 md:pb-20">
                      <TitleBanc
                        as="h2"
                        className="max-w-2xl text-2xl font-black uppercase leading-tight tracking-tight text-white drop-shadow-lg sm:text-3xl md:text-4xl"
                      >
                        {slide.title}
                      </TitleBanc>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Botões de Navegação */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/25 sm:left-6"
          onClick={scrollPrev}
          aria-label="Slide anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-white/25 sm:right-6"
          onClick={scrollNext}
          aria-label="Próximo slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Indicadores (Dots) */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20 sm:bottom-8">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex ? "w-6 bg-brand-accent" : "w-2 bg-white/50 hover:bg-white/70"
              }`}
              onClick={() => emblaApi?.scrollTo(index)}
              aria-label={`Ir para o slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
