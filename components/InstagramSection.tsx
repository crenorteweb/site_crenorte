'use client'
import dynamic from 'next/dynamic';
import { Instagram } from 'lucide-react';
import { TitleBanc } from "./textBanc/TitleBanc";
import { Reveal } from "./ui/Reveal";
import { SectionBadge } from "./ui/SectionBadge";

const InstagramEmbed = dynamic(
  () => import('react-social-media-embed').then(mod => mod.InstagramEmbed),
  { ssr: false }
);

const reels = [
  "https://www.instagram.com/reel/DbDjEUPoUtV/?igsh=MTF0bHh0ZGx2eTdkMQ==",
  "https://www.instagram.com/reel/DbvIgT8hNTT/?igsh=aW4zbXRqeTU4NmJv",
  "https://www.instagram.com/reel/DXHfTNDDW-A/?igsh=MWJrYjZmYTloMGl6MA==",
];

export function InstagramSection() {
    return (
        <section className="relative px-4 py-16 md:py-28 pb-16 w-full flex justify-center overflow-hidden bg-brand-bg">
        <div className="mx-auto w-full max-w-xl md:max-w-7xl flex flex-col items-center rounded-[3rem] bg-white p-8 md:p-12 text-brand-dark text-center shadow-xl shadow-black/5">
          <Reveal className="flex flex-col items-center gap-3 mb-8">
            <SectionBadge icon={Instagram} label="Redes sociais" variant="light" />
            <TitleBanc as="h2" className="text-xl md:text-3xl font-black uppercase tracking-tight">
              SIGA NOSSO INSTAGRAM! <br className="md:hidden" />
              <span className="text-brand-main">@CRENORTE</span>
            </TitleBanc>
            <a
              href="https://www.instagram.com/crenorte"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-flex items-center gap-2 rounded-full bg-brand-main px-6 py-2.5 text-xs font-black uppercase tracking-widest text-white transition-all duration-300 hover:scale-105 hover:bg-brand-dark"
            >
              <Instagram className="h-4 w-4" />
              Seguir no Instagram
            </a>
          </Reveal>

          <div className="flex flex-col items-center gap-8 md:flex-row md:justify-center w-full">
            {reels.map((url, index) => (
              <Reveal key={url} delay={index * 100}>
                <div className="relative rounded-[2rem] border-[6px] border-brand-dark bg-brand-dark overflow-hidden shadow-2xl shrink-0 transition-transform duration-300 hover:-translate-y-1">
                  {/* Notch estilo smartphone moderno */}
                  <div className="absolute top-0 left-1/2 z-10 h-4 w-20 -translate-x-1/2 rounded-b-xl bg-brand-dark" />
                  <InstagramEmbed url={url} width={326} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    )
}
