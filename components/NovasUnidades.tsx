"use client"
import Image from 'next/image'
import { MapPin } from 'lucide-react'
import { TitleBanc } from "./textBanc/TitleBanc"
import { TextBanc } from "./textBanc/TextBanc"

const estadosAtivos = ["Mato Grosso", "Tocantins", "Roraima", "Rondônia", "Amazonas", "Maranhão", "Pará", "Amapá", "Acre"]

export function NovasUnidades() {
    return (
        <section className="w-full bg-brand-dark  px-4 relative overflow-hidden">
            {/* Background decorative blurs */}
            <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />
            <div className="absolute -right-24 top-1/4 w-80 h-80 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full bg-brand-accent/15 border border-brand-accent/30 px-4 py-1.5 mb-4">
                        <MapPin className="h-4 w-4 text-brand-accent" />
                        <span className="text-brand-accent text-xs font-semibold uppercase tracking-widest">Expansão Nacional</span>
                    </div>
                    <TitleBanc as="h2" className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-3">
                        Microcrédito Mais Perto de Você
                    </TitleBanc>
                    <TextBanc className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                        Nossos assessores estão presentes em 9 estados do Brasil.
                    </TextBanc>
                </div>

                {/* Content: map + states lado a lado */}
                <div className="flex flex-col lg:flex-row items-stretch gap-8">
                    {/* Map image — maior, destaque */}
                    <div className="w-full lg:w-2/3 rounded-2xl overflow-hidden">
                        <Image
                            src="/mapa.png"
                            alt="Mapa de atuação Crenorte"
                            width={1200}
                            height={800}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                    {/* States info */}
                    <div className="w-full lg:w-1/3 flex flex-col justify-center gap-4">
                        {/* Active states */}
                        <div className="rounded-2xl bg-white/5 border border-white/10 px-5 py-4">
                            <div className="flex items-center gap-2 mb-3">
                                <MapPin className="h-4 w-4 text-brand-accent" />
                                <span className="text-white text-2xl font-bold uppercase tracking-wider">Onde atuamos</span>
                            </div>
                            <ul className="flex flex-col divide-y divide-white/5">
                                {estadosAtivos.map((estado) => (
                                    <li key={estado} className="flex items-center gap-3 py-2.5">
                                        <MapPin className="h-3.5 w-3.5 shrink-0 text-brand-accent" />
                                        <span className="text-sm font-medium text-white">{estado}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
