"use client"

import { useMemo, useState } from "react"
import { Building2, MapPin } from "lucide-react"
import { TitleBanc } from "./textBanc/TitleBanc"
import { TextBanc } from "./textBanc/TextBanc"
import { BrazilStatesMap } from "./units/BrazilStatesMap"
import { UnitCard } from "./units/UnitCard"
import { brazilStatePaths } from "./units/brazilStatesPaths"
import { unitsByState } from "./units/unitsData"
import { Reveal } from "./ui/Reveal"
import { SectionBadge } from "./ui/SectionBadge"

// Estados exibidos: Região Norte inteira + Maranhão e Mato Grosso
const VISIBLE_STATE_IDS = ["ac", "am", "ap", "pa", "ro", "rr", "to", "ma", "mt"]
const DEFAULT_STATE_ID = "pa"

// viewBox recortado (zoom) só na área desses estados, calculado a partir do mapa completo
const MAP_VIEWBOX = "-17.3 -17.3 537.5 401.4"

export function NovasUnidades() {
    const [selectedState, setSelectedState] = useState(DEFAULT_STATE_ID)

    // Lista de estados ordenada pela sigla (UF), como no seletor de referência
    const orderedStates = useMemo(
        () =>
            brazilStatePaths
                .filter((state) => VISIBLE_STATE_IDS.includes(state.id))
                .sort((a, b) => a.id.localeCompare(b.id)),
        []
    )

    const selectedStateData = orderedStates.find((state) => state.id === selectedState)
    const units = unitsByState[selectedState] ?? []

    return (
        <section className="w-full bg-brand-dark px-4 py-14 md:py-20 relative overflow-hidden">
            {/* Background decorative blurs */}
            <div className="absolute -left-24 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />
            <div className="absolute -right-24 top-1/4 w-80 h-80 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />

            <div className="mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <Reveal className="text-center mb-12 flex flex-col items-center gap-3">
                    <SectionBadge icon={MapPin} label="Expansão Nacional" />
                    <TitleBanc as="h2" className="text-3xl md:text-4xl font-black uppercase tracking-tight text-white mb-1">
                        Microcrédito Mais Perto de Você
                    </TitleBanc>
                    <TextBanc className="text-gray-400 text-sm md:text-base max-w-xl mx-auto">
                        Selecione um estado no mapa e encontre a unidade Crenorte mais próxima de você.
                    </TextBanc>
                </Reveal>

                {/* Mapa interativo + lista de estados */}
                <Reveal delay={100} className="flex flex-col lg:flex-row items-stretch gap-6 mb-10">
                    {/* Mapa */}
                    <div className="w-full lg:w-3/5 flex flex-col rounded-2xl bg-white/5 border border-white/10 p-6">
                        <BrazilStatesMap
                            stateIds={VISIBLE_STATE_IDS}
                            selectedState={selectedState}
                            onSelect={setSelectedState}
                            viewBox={MAP_VIEWBOX}
                            className="max-h-[420px]"
                        />
                    </div>

                    {/* Lista de estados */}
                    <div className="w-full lg:w-2/5 rounded-2xl bg-white/5 border border-white/10 p-5 flex flex-col">
                        <div className="flex items-center gap-2 mb-3 px-1">
                            <MapPin className="h-4 w-4 text-brand-accent" />
                            <TitleBanc as="h3" className="text-white text-lg font-bold uppercase tracking-wider">
                                Onde atuamos
                            </TitleBanc>
                        </div>
                        <ul className="flex flex-col divide-y divide-white/5">
                            {orderedStates.map((state) => {
                                const isSelected = state.id === selectedState
                                return (
                                    <li key={state.id}>
                                        <button
                                            type="button"
                                            onClick={() => setSelectedState(state.id)}
                                            aria-pressed={isSelected}
                                            className={`w-full flex items-center gap-3 py-2.5 px-2 rounded-lg text-left transition-colors duration-200 cursor-pointer ${
                                                isSelected ? "bg-brand-accent" : "hover:bg-white/5"
                                            }`}
                                        >
                                            <MapPin
                                                className={`h-3.5 w-3.5 shrink-0 ${isSelected ? "text-brand-dark" : "text-brand-accent"}`}
                                            />
                                            <span
                                                className={`text-sm flex-1 ${
                                                    isSelected ? "font-bold text-brand-dark" : "font-medium text-white"
                                                }`}
                                            >
                                                {state.name} ({state.id.toUpperCase()})
                                            </span>
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </Reveal>

                {/* Cards das unidades do estado selecionado */}
                <div>
                    <Reveal className="flex items-center gap-2 mb-5">
                        <Building2 className="h-5 w-5 text-brand-accent" />
                        <TitleBanc as="h3" className="text-white text-xl md:text-2xl font-bold uppercase tracking-wide">
                            Unidades em {selectedStateData?.name ?? ""}
                        </TitleBanc>
                    </Reveal>

                    {units.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {units.map((unit, index) => (
                                <Reveal key={`${selectedState}-${index}`} delay={index * 80}>
                                    <UnitCard unit={unit} />
                                </Reveal>
                            ))}
                        </div>
                    ) : (
                        <Reveal className="rounded-2xl border border-dashed border-white/10 bg-white/5 px-6 py-10 text-center">
                            <TextBanc className="text-gray-400 text-sm md:text-base max-w-md mx-auto">
                                Estamos atualizando as unidades deste estado. Fale com a gente pelo WhatsApp para saber mais.
                            </TextBanc>
                        </Reveal>
                    )}
                </div>
            </div>
        </section>
    )
}
