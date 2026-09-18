import Image from "next/image"
import { Instagram } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { WHATSAPP_NUMBER } from "../lib/constants"

export function Footer() {
    return (
        <footer className="relative w-full overflow-hidden border-t border-white/10 bg-brand-dark">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-accent/40 to-transparent" />

            <div className="mx-auto max-w-6xl px-6 py-12 md:px-12">
                <div className="grid grid-cols-1 gap-10 text-white/70 md:grid-cols-[1.3fr_1fr_1fr] md:gap-8">

                    {/* Marca */}
                    <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
                        <Image src="/crenorte.png" alt="crenorte" width={200} height={90} />
                        <p className="text-xs uppercase tracking-wide text-white/50">
                            Instituto Cultural, Social e Educacional da Amazônia - ICSEIA
                        </p>
                    </div>

                    {/* Institucional */}
                    <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
                        <span className="text-xs font-bold uppercase tracking-widest text-white">Institucional</span>
                        <a href="#" className="text-sm text-white/60 transition-colors hover:text-brand-accent">
                            Política de Privacidade
                        </a>
                        <a href="#" className="text-sm text-white/60 transition-colors hover:text-brand-accent">
                            Termos de Uso
                        </a>
                        <a
                            href={`https://wa.me/${WHATSAPP_NUMBER}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-brand-accent"
                        >
                            <FaWhatsapp className="h-4 w-4 shrink-0" />
                            Fale com a gente
                        </a>
                        <a
                            href="https://www.instagram.com/crenorte"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm text-white/60 transition-colors hover:text-brand-accent"
                        >
                            <Instagram className="h-4 w-4 shrink-0" />
                            @crenorte
                        </a>
                    </div>

                    {/* Parceiros */}
                    <div className="flex flex-col items-center justify-center gap-6 md:items-end">
                        <Image src="/basa_acredita.png" alt="basa acredita" width={200} height={90} />
                        <Image src="/banco_da_amazonia.png" alt="banco da amazonia" width={150} height={80} />
                    </div>
                </div>

                <div className="mt-10 flex flex-col items-center gap-2 border-t border-white/10 pt-6 text-center text-[11px] text-white/40 md:flex-row md:justify-between md:text-left">
                    <p>CNPJ: 50.570.7600001-02</p>
                    <p>E-mail: contato@crenorte.com.br</p>
                </div>
            </div>
        </footer>
    )
}
