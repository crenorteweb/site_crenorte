import Image from "next/image";
import { Reveal } from "./ui/Reveal";

const REQUEST_URL = "https://crenorte-analise.lovable.app/";

export function FormSection() {
    return (
      <section className="relative w-full overflow-hidden bg-brand-dark px-4 py-20 md:py-28">
        {/* Concentric rings background */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[280px] w-[280px] rounded-full border border-white/5 md:h-[420px] md:w-[420px]" />
          <div className="absolute h-[380px] w-[380px] rounded-full border border-white/5 md:h-[560px] md:w-[560px]" />
          <div className="absolute h-[480px] w-[480px] rounded-full border border-white/5 md:h-[700px] md:w-[700px]" />
          <div className="absolute h-[580px] w-[580px] rounded-full border border-white/5 md:h-[840px] md:w-[840px]" />
        </div>

        {/* Background decorative blurs */}
        <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-brand-accent/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand-accent/10 blur-3xl" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-10 text-center">
          <Reveal>
            <Image
              src="/basa_acredita.png"
              alt="Basa Acredita"
              width={400}
              height={225}
              className="h-auto w-44 md:w-56"
            />
          </Reveal>

          <Reveal delay={80}>
            <h2 className="font-banco-amazonia text-3xl font-extrabold uppercase leading-tight text-white md:text-5xl">
              <span className="relative inline-block px-1">
                <span className="relative z-10">Trabalha por conta própria?</span>
                <span className="absolute inset-x-0 bottom-1 -z-10 h-2.5 bg-brand-accent md:bottom-2 md:h-4" />
              </span>
              <br />
              <span className="relative mt-2 inline-block px-1 md:mt-4">
                <span className="relative z-10">Solicite seu microcrédito.</span>
                <span className="absolute inset-x-0 bottom-1 -z-10 h-2.5 bg-brand-accent md:bottom-2 md:h-4" />
              </span>
            </h2>
          </Reveal>

          <Reveal delay={160}>
            <a
              href={REQUEST_URL}
              target="_self"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-10 py-4 text-lg font-bold text-brand-dark shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-105 hover:bg-amber-200"
            >
              Solicite agora
            </a>
          </Reveal>
        </div>
      </section>
    )
}
