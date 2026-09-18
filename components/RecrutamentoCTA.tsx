"use client";

import Link from "next/link";
import { TitleBanc } from "./textBanc/TitleBanc";
import { TextBanc } from "./textBanc/TextBanc";
import { ArrowRight, Briefcase } from "lucide-react";
import { Reveal } from "./ui/Reveal";
import { SectionBadge } from "./ui/SectionBadge";

export function RecrutamentoCTA() {
  return (
    <section className="w-full bg-brand-main border-t border-b border-white/10 px-4 py-16 md:py-20 text-center relative overflow-hidden">
      {/* Background Decorative Blur */}
      <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-brand-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute -right-20 -bottom-20 w-72 h-72 rounded-full bg-brand-accent/10 blur-3xl pointer-events-none" />

      <Reveal className="mx-auto max-w-3xl flex flex-col items-center relative z-10">
        <SectionBadge icon={Briefcase} label="Vagas abertas" className="mb-4" />

        <TitleBanc as="h2" className="mb-4 text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
          Estamos Contratando!
        </TitleBanc>

        <TextBanc className="mb-8 text-sm md:text-base text-gray-300 max-w-xl leading-relaxed">
          Temos vagas abertas para Assessor(a) de Microfinanças nos estados do Pará, Maranhão, Tocantins, Roraima e Rondônia.
Confira as oportunidades disponíveis e candidate-se.
        </TextBanc>

        <Link
          href="/trabalhe-conosco"
          className="font-banco-amazonia-texto inline-flex items-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-sm font-black uppercase tracking-wider text-brand-dark transition-all duration-300 hover:scale-105 hover:bg-brand-accent-hover focus:outline-none focus:ring-2 focus:ring-brand-accent shadow-[0_0_20px_rgba(0,225,45,0.2)] hover:shadow-[0_0_25px_rgba(0,225,45,0.4)]"
        >
          Trabalhe Conosco
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  );
}
