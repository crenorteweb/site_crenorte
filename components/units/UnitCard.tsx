import { Building2, Navigation, Phone } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import { TitleBanc } from "../textBanc/TitleBanc"
import { TextBanc } from "../textBanc/TextBanc"
import { WHATSAPP_NUMBER } from "@/lib/constants"

export type Unit = {
    name: string
    phones: string[]
    /** Cidades/localidades atendidas por esta unidade. */
    localities: string[]
    /** Número no formato internacional (só dígitos) para o link do WhatsApp. Usa o número geral por padrão. */
    whatsapp?: string
}

type UnitCardProps = {
    unit: Unit
}

export function UnitCard({ unit }: UnitCardProps) {
    const whatsappNumber = unit.whatsapp ?? WHATSAPP_NUMBER

    return (
        <div className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/30 hover:bg-white/10">
            <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-accent/15 text-brand-accent">
                    <Building2 className="h-5 w-5" />
                </div>
                <TitleBanc as="h3" className="text-base font-bold leading-tight text-white">
                    {unit.name}
                </TitleBanc>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-300">
                <Phone className="h-4 w-4 shrink-0 text-brand-accent" />
                <TextBanc as="span">{unit.phones.join(" / ")}</TextBanc>
            </div>

            <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-banco-amazonia-texto inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-4 py-2.5 text-xs font-black uppercase tracking-wider text-brand-dark transition-all duration-300 hover:scale-[1.02] hover:bg-brand-accent-hover"
            >
                <FaWhatsapp className="h-4 w-4" />
                Fale com a gente
            </a>

            {unit.localities.length > 0 && (
                <div className="flex flex-col gap-2 border-t border-white/5 pt-3">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                        <Navigation className="h-4 w-4 shrink-0 text-brand-accent" />
                        <TextBanc as="span" className="font-semibold uppercase tracking-wide">
                            Localidades atendidas
                        </TextBanc>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                        {unit.localities.map((locality) => (
                            <span
                                key={locality}
                                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-gray-300"
                            >
                                {locality}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
