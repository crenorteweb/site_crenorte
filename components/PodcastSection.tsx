"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, Youtube } from "lucide-react"
import { TitleBanc } from "./textBanc/TitleBanc"
import { TextBanc } from "./textBanc/TextBanc"
import { Reveal } from "./ui/Reveal"
import { SectionBadge } from "./ui/SectionBadge"

type Episode = {
    id: string
    title: string
}

// Episódios mais recentes do canal youtube.com/@crenortebasaacredita
const episodes: Episode[] = [
    {
        id: "sAQuE_ew9vs",
        title: "EP. 09 — Edmilson Parente, Diretor de Controladoria da Crenorte",
    },
    {
        id: "qa3CVnveYL0",
        title: "EP. 08 — Dr. Ewerton Conte, Setor Jurídico da Crenorte",
    },
    {
        id: "0OOwy3pO41A",
        title: "EP. 07 — Felipe Roldan (Gerente Estratégico) e Márcio Roney (Coordenador Comercial)",
    },
];

function PodcastCard({ episode, delay }: { episode: Episode; delay: number }) {
    const [playing, setPlaying] = useState(false)

    return (
        <Reveal delay={delay}>
            <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/30 hover:bg-white/10">
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                    {playing ? (
                        <iframe
                            className="h-full w-full"
                            src={`https://www.youtube.com/embed/${episode.id}?autoplay=1`}
                            title={episode.title}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    ) : (
                        <button
                            type="button"
                            onClick={() => setPlaying(true)}
                            className="relative h-full w-full cursor-pointer"
                            aria-label={`Reproduzir: ${episode.title}`}
                        >
                            <Image
                                src={`https://i.ytimg.com/vi/${episode.id}/hqdefault.jpg`}
                                alt={episode.title}
                                fill
                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/30 transition-colors duration-300 group-hover:bg-black/10" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-accent text-brand-dark shadow-lg transition-transform duration-300 group-hover:scale-110">
                                    <Play className="h-6 w-6 fill-current" />
                                </div>
                            </div>
                        </button>
                    )}
                </div>
                <div className="p-4">
                    <TextBanc as="p" className="text-sm font-semibold leading-snug text-white">
                        {episode.title}
                    </TextBanc>
                </div>
            </div>
        </Reveal>
    )
}

export function PodcastSection() {
    return (
        <section className="relative w-full overflow-hidden bg-brand-dark px-4 py-16 md:py-24">
            <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-brand-accent/5 blur-3xl" />
            <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-brand-accent/5 blur-3xl" />

            <div className="relative z-10 mx-auto max-w-7xl">
                <Reveal className="mb-10 flex flex-col items-center gap-3 text-center">
                    <SectionBadge icon={Youtube} label="Podcast Basa Acredita" />
                    <TitleBanc as="h2" className="text-2xl md:text-3xl font-black uppercase tracking-tight text-white">
                        Ouça nosso podcast
                    </TitleBanc>
                    <TextBanc className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                        Conversas com o time Crenorte e Banco da Amazônia sobre microcrédito, bastidores e as
                        histórias de quem faz o Basa Acredita acontecer.
                    </TextBanc>
                </Reveal>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {episodes.map((episode, index) => (
                        <PodcastCard key={episode.id} episode={episode} delay={index * 100} />
                    ))}
                </div>

                <Reveal delay={300} className="mt-10 flex justify-center">
                    <a
                        href="https://www.youtube.com/@crenortebasaacredita"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-xs font-black uppercase tracking-widest text-brand-dark transition-all duration-300 hover:scale-105 hover:bg-brand-accent-hover"
                    >
                        <Youtube className="h-4 w-4" />
                        Ver todos os episódios
                    </a>
                </Reveal>
            </div>
        </section>
    )
}
